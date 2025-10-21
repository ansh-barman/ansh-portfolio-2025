import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { db } from "@/lib/firebase";

type FirestoreMetric = {
  label: string;
  value: string;
  iconColor: "green" | "yellow" | "blue";
};

type FirestoreProject = {
  name: string;
  description: string;
  leftimg: string;
  text: string;
  metrics: FirestoreMetric[];
};

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  // Await params before using it
  const { id } = await props.params;

  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    );
  }

  const data = docSnap.data() as FirestoreProject;

  const colorClasses = {
    green: { bg: "bg-green-100", border: "border-green-500" },
    yellow: { bg: "bg-yellow-100", border: "border-yellow-500" },
    blue: { bg: "bg-blue-100", border: "border-blue-500" },
  } as const;

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="text-lg text-gray-600">{data.text}</p>

      <div className="flex flex-col md:flex-row items-start gap-8">
        <Image
          src={data.leftimg}
          alt={data.name}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          width={600}
          height={400}
        />

        <div className="flex-1 space-y-4">
          <p className="text-base text-gray-700 leading-relaxed">{data.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {data.metrics?.map((metric, index) => {
              const cls = colorClasses[metric.iconColor];
              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${cls.bg} border-l-4 ${cls.border}`}
                >
                  <p className="font-medium text-gray-900">{metric.label}</p>
                  <p className="text-xl font-semibold text-gray-800">{metric.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}//checking fb
