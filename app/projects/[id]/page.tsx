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

interface ProjectPageProps {
  params: { id: string };
}

// Server Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  // Destructure params immediately
  const { id } = params;

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

  // Map Tailwind-safe colors
  const bgColorMap = {
    green: "bg-green-100 border-l-4 border-green-500",
    yellow: "bg-yellow-100 border-l-4 border-yellow-500",
    blue: "bg-blue-100 border-l-4 border-blue-500",
  };

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="text-lg text-gray-600">{data.description}</p>

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
            {data.metrics?.map((metric, index) => (
              <div key={index} className={`p-4 rounded-xl ${bgColorMap[metric.iconColor]}`}>
                <p className="font-medium text-gray-900">{metric.label}</p>
                <p className="text-xl font-semibold text-gray-800">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
