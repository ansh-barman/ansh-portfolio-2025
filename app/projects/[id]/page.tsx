import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface ProjectPageProps {
  params: { id: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const docRef = doc(db, "projects", params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    );
  }

  const data = docSnap.data();

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="text-lg text-gray-600">{data.text}</p>

      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={data.leftimg}
          alt={data.name}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />

        <div className="flex-1 space-y-4">
          <p className="text-base text-gray-700 leading-relaxed">{data.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {data.metrics?.map((metric: any, index: number) => (
              <div
                key={index}
                className={`p-4 rounded-xl bg-${metric.iconColor}-100 border-l-4 border-${metric.iconColor}-500`}
              >
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
