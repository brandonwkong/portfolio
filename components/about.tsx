import Image from "next/image"
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
} from "react-icons/si"


const techIcons = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "AI", icon: SiOpenai },
]

export default function About() {
  return (
    <section id="about-me" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Computer Engineering Student</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a Computer Engineering student with a passion for creating innovative AI-powered systems. I
              specialize in integrating machine learning, computer vision, and real-time tools to develop dynamic,
              user-centered experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              I&apos;m constantly learning and seeking new ways to apply my knowledge to real-world problems. My goal is
              to build systems that are not only technically impressive but also intuitive and accessible to users.
            </p>

            <div className="flex flex-wrap gap-3">
              {techIcons.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm flex items-center gap-2"
                >
                  <Icon size={18} />
                  <span className="sr-only">{name}</span> {/* accessible but hidden */}
                </span>
              ))}
            </div>

            <a href="/Resume_BrandonKongAI.pdf" download>
              <button className="mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                Download CV
              </button>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
              <Image src="/me.PNG?height=400&width=400" alt="Brandon Kong" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
