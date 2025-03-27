const ExperienceText = () => {
  const education = [
    {
      degree: "Full Stack Web Development",
      institution: "DCI Career Institute, Berlin, Germany",
      period: "02/2024 - 05/2025",
      description:
        "A one-year full-time training in full-stack web development which covers essential front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and databases. This hands-on experience prepares students to build and manage web applications professionally.",
    },
    {
      degree: "Diploma in Networking",
      institution: "NIIT Aria University, Balkh Afghnistan",
      period: "05/2010 - 10/2012,",
      description:
        "I earned a Diploma in Networking from NIIT Aria University, gaining expertise in network configuration, security, and troubleshooting. ",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-[100px] px-4 md:px-8 mb-8">
      <h2 className="text-6xl text-cyan mb-10">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-darkBlue p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cyan/20"
          >
            <h3 className="text-2xl font-bold text-cyan mb-2">{edu.degree}</h3>
            <h4 className="text-xl text-gray-300 mb-2">{edu.institution}</h4>
            <p className="text-cyan-400 mb-4">{edu.period}</p>
            <p className="text-gray-400 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceText;
