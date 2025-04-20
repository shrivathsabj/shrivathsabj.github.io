import React, { useEffect, useState } from 'react';
import { Github, Twitter, Linkedin, Mail, ExternalLink, ArrowLeft } from 'lucide-react';

function App() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<'corrosion' | 'crack' | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<'sprinklr' | 'incident' | 'millennium' | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (selectedProject === 'corrosion') {
    return <CorrosionPaperDetails onBack={() => setSelectedProject(null)} />;
  }

  if (selectedProject === 'crack') {
    return <CrackPaperDetails onBack={() => setSelectedProject(null)} />;
  }

  if (selectedExperience === 'sprinklr') {
    return <SprinklrDetails onBack={() => setSelectedExperience(null)} />;
  }

  if (selectedExperience === 'incident') {
    return <IncidentDetails onBack={() => setSelectedExperience(null)} />;
  }

  if (selectedExperience === 'millennium') {
    return <MillenniumDetails onBack={() => setSelectedExperience(null)} />;
  }

  return (
    <div className={`min-h-screen bg-[#111111] text-white transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-32">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Hey, I'm Shrivathsa B J 👋</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Results-driven product implementation consultant with a strong foundation in B2B SaaS. Proven expertise in end-to-end product lifecycle management, cross-functional collaboration, and driving engagement and business metrics. Passionate about building products that solve real-world problems and deliver measurable values.
          </p>
        </header>

        <section className="mb-16">
          <div className="flex space-x-6">
            <a href="https://github.com/shrivathsabj" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://x.com/AK47_Gn" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/shrivathsa-b-j-6bb6b3194/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:belurshrivathsa88@gmail.com"
               className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-8">Experience</h2>
          <div className="space-y-6">
            <div 
              onClick={() => setSelectedExperience('sprinklr')}
              className="block p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#222222] transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">Product Implementation Consultant</h3>
                  <p className="text-gray-400 text-sm">Sprinklr</p>
                </div>
                <span className="text-gray-400 text-sm">2023 - Present</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Leading product implementation and customer success initiatives for enterprise clients.
              </p>
            </div>

            <div 
              onClick={() => setSelectedExperience('incident')}
              className="block p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#222222] transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">Chief Marketing Coordinator</h3>
                  <p className="text-gray-400 text-sm">Incident NITK</p>
                </div>
                <span className="text-gray-400 text-sm">2022 - 2023</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Led marketing strategy for NITK's cultural festival, achieving record sponsorship.
              </p>
            </div>

            <div 
              onClick={() => setSelectedExperience('millennium')}
              className="block p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#222222] transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">Millennium Fellow</h3>
                  <p className="text-gray-400 text-sm">Class 2022</p>
                </div>
                <span className="text-gray-400 text-sm">2022</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Selected for prestigious fellowship focused on UN Sustainable Development Goals.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
            <div className="space-y-6">
              <div 
                onClick={() => setSelectedProject('corrosion')}
                className="block p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#222222] transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">DETECTION AND VISUALIZATION OF CORRODED SURFACES USING MACHINE LEARNING</h3>
                  <ExternalLink size={16} className="text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm">
                  A machine learning approach to detect and visualize corroded surfaces using CNNs and XGBoost color classifier.
                </p>
              </div>
              
              <div 
                onClick={() => setSelectedProject('crack')}
                className="block p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#222222] transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">CRACK DETECTION ON RC STRUCTURES USING CNN</h3>
                  <ExternalLink size={16} className="text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm">
                  Exploring crack detection in concrete using various ConvNet architectures and determining crack properties.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Writing</h2>
            <div className="space-y-6">
              <ArticleCard 
                title="Himalaya: No More Unchallengeable"
                date="October 2021"
                link="https://ascenitk.wordpress.com/2021/10/14/himalaya-no-more-unchallengeable/"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SprinklrDetails({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Product Implementation Consultant</h1>
            <p className="text-xl text-gray-400">Sprinklr</p>
          </div>
          <span className="text-gray-400">2023 - Present</span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                <li>Successfully on boarded 300+ users on the platform and analyzed customer behavior and product metrics to identify product gaps, achieving 9/10 client satisfaction score through targeted improvements.</li>
                <li>Contributed to product road map development, aligning features with business objectives and customer needs, resulting in 22 percent increase in ROI on branding initiatives and successful product up sells.</li>
                <li>Developed and maintained detailed PRDs for 7 new product enhancements through stakeholder collaboration, documenting use cases and customer needs for solution development.</li>
                <li>Implemented and analyzed product metrics and KPIs to monitor feature usage and performance, resulting in a 15 percent reduction in integration issues and improved user satisfaction.</li>
                <li>Streamlined product feedback collection channels using the in house MS Office suite and conducted qualitative and quantitative customer research.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IncidentDetails({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Chief Marketing Coordinator</h1>
            <p className="text-xl text-gray-400">Incident NITK</p>
          </div>
          <span className="text-gray-400">2022 - 2023</span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Achievement Highlights</h3>
              <p className="text-gray-300 mb-4">
                Spearheaded the Marketing and Branding campaign of Incident 2023 edition and successfully raised the highest ever Sponsorship amount of INR 1.08 Cr.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="https://en.wikipedia.org/wiki/Incident_(festival)#Incident_2023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png"
                alt="Wikipedia Logo"
                className="h-6"
              />
              Read on Wikipedia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MillenniumDetails({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Millennium Fellow</h1>
            <p className="text-xl text-gray-400">Class 2022</p>
          </div>
          <span className="text-gray-400">2022</span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">About the Fellowship</h3>
              <p className="text-gray-300 mb-4">
                The Millennium Fellowship is a semester-long leadership development program that helps students advance the UN Sustainable Development Goals on campus and in their communities.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="https://www.millenniumfellows.org/fellow/2022/nitk/shrivathsa-b-j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/1200px-UN_emblem_blue.svg.png"
                alt="UN Logo"
                className="h-6"
              />
              View Fellowship Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CorrosionPaperDetails({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          DETECTION AND VISUALIZATION OF CORRODED SURFACES USING MACHINE LEARNING
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            In this paper we introduced an approach to detect and visualize corroded surfaces using machine learning, 
            specifically convolutional neural networks (CNNs) and an extreme gradient boosting (XGBoost) color classifier 
            for pixel-level analysis.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                <li>A total of 1900 images, comprising 1050 corrosion images and 850 images without corrosion, were scraped from the web using Selenium to create a labeled dataset representing different corrosion scenarios.</li>
                <li>Two CNN models were developed to classify images as "Corroded" or "No Corrosion," with the best-performing architecture employing four Conv2D layers, dropout regularization, and the ReLU activation function to overcome overfitting issues. This model achieved a classification accuracy of 94.44%, outperforming the baseline model that showed overfitting signs.</li>
                <li>For region-specific detection, an XGBoost color classifier was used to identify corroded zones based on color features, achieving an AUC of 86.67%. The method allows for marking the corroded regions in green to provide a clear visualization of damage, along with approximate area calculations by multiplying the pixel count by a known pixel size.</li>
                <li>Conclusively, the paper demonstrates an end-to-end solution that can facilitate rapid, automated corrosion assessment, reduce manual inspection efforts, and potentially be integrated with drones or mobile devices for real-world industrial monitoring.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="https://www.springerprofessional.de/en/detection-and-visualization-of-corroded-surfaces-using-machine-l/50026134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <img 
                src="https://images.springer.com/sgw/logos/springer.svg" 
                alt="Springer Logo" 
                className="h-6"
              />
              Read the full paper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrackPaperDetails({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          CRACK DETECTION ON RC STRUCTURES USING CNN
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            In this paper, we aim to explore the possibility of using image processing and machine learning (ML) 
            algorithms to determine cracks in concrete. In particular, we used prebuilt ConvNets such as VGG16, 
            ResNet50, Xception, and MobileNet.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                <li>The datasets were taken from the Kaggle website. The dataset is generated from 458 high-resolution images (4032x3024 pixels).</li>
                <li>This dataset consists of 40000 images, 20000 with and 20000 without cracks.</li>
                <li>VGG16 Architecture-based artificial neural network performed the best while Xception performed the worst.</li>
                <li>As the scope of the project expanded, we also tried to determine crack properties, specifically crack width as we felt that an automated system for the same would be much more useful than a manual one.</li>
                <li>Crack width determination was accomplished using morphological transformations and concepts of Euclidean distance in MatLab.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="https://github.com/shrivathsabj/Major"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Github className="h-5 w-5" />
              View Project on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ title, date, link }: { title: string; date: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" 
       className="flex justify-between items-center group">
      <div>
        <h3 className="font-medium group-hover:text-gray-300 transition-colors">{title}</h3>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
      <ExternalLink size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

export default App;