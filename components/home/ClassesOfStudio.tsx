import Image from 'next/image';
import { classes } from '@/data/ClassOfStudioData';

const ClassesOfStudio = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((classData) => (
            <div key={classData.id} className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col">
              <Image
                src={classData.image || '/placeholder.webp'} // Πρόσθεσε ένα fallback αν η εικόνα λείπει
                alt={classData.className}
                width={500}
                height={300}
                className="object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-700">{classData.className}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{classData.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesOfStudio;
