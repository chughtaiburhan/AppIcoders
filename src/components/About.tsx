import Button from './Button';

const About: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          {/* Left Column - Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-xl md:text-2xl lg:text-5xl font-bold leading-tight">
              <span className="text-red-600">Appicoders</span>
              <span className="text-black"> – #1. Mobile App & Web Development Company in USA</span>
            </h1>
          </div>

          {/* Right Column - Description and Button */}
          <div className="space-y-6 mt-4 sm:mt-10">
            <p className="text-black text-base sm:text-lg leading-relaxed">
              Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
            </p>
             <Button text='Read More' padding='px-12 py-3' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;