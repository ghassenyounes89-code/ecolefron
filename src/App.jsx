import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Clock, Facebook, Send, 
  BookOpen, Monitor, Languages, GraduationCap, ArrowRight, 
  Star, Sparkles, Building2, Users, Award, Wifi, LogIn,
  LayoutDashboard, Plus, Edit, Trash2, Check, XCircle, Clock3,
  BarChart3, Settings, Eye, EyeOff, Search, Filter, Download,  
  ChevronDown, MoreVertical, AlertCircle, Home
} from 'lucide-react';
import './App.css';

// ==================== API BASE URL ====================
const API_URL = 'https://ecole-s6ux.onrender.com/api';

// ==================== ADMIN AUTHENTICATION ====================
const SECRET_PATH = '/secret-dashboard'; // الرابط السري للدخول

// ==================== COMPOSANTS DE LA PAGE PRINCIPALE ====================

// Header Component (بدون زر Admin)
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2 text-sm">
          <a href="tel:0775818782" className="flex items-center gap-2 hover:text-accent transition-colors duration-300">
            <Phone className="w-4 h-4" />
            <span className="font-poppins">0775 818 782</span>
          </a>
          <a href="mailto:smartscholl@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors duration-300">
            <Mail className="w-4 h-4" />
            <span className="font-poppins">smartscholl@gmail.com</span>
          </a>
          {/* تم حذف زر Admin */}
        </div>
      </div>

      {/* Main Header */}
<div className="container mx-auto px-4 py-4">
  <div className="flex justify-between items-center">
    {/* Logo مع صورة */}
    <div className="flex items-center gap-3">
      
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
        <img 
          src="\image.png" 
          alt="Smart School Logo"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div>
        <h1 className="text-xl text-primary m-0 font-cairo font-bold">
          Smart School
        </h1>
        <p className="text-sm text-gray-600 m-0 font-cairo">المدرسة الذكية</p>
      </div>
    </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-primary hover:text-accent transition-colors duration-300 font-poppins font-medium">
              Accueil
            </a>
            <a href="#formations" className="text-primary hover:text-accent transition-colors duration-300 font-poppins font-medium">
              Formations
            </a>
            <a href="#pourquoi" className="text-primary hover:text-accent transition-colors duration-300 font-poppins font-medium">
              Pourquoi Nous
            </a>
            <a href="#contact" className="text-primary hover:text-accent transition-colors duration-300 font-poppins font-medium">
              Contact
            </a>
            <a 
              href="#inscription" 
              className="bg-accent text-white px-6 py-2.5 rounded-lg hover:bg-accent-hover transition-all duration-300 font-poppins font-semibold shadow-md hover:shadow-lg"
            >
              S'inscrire
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 border-t border-gray-200 mt-4">
            <a href="#accueil" className="text-primary hover:text-accent transition-colors duration-300 py-2 font-poppins" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </a>
            <a href="#formations" className="text-primary hover:text-accent transition-colors duration-300 py-2 font-poppins" onClick={() => setIsMenuOpen(false)}>
              Formations
            </a>
            <a href="#pourquoi" className="text-primary hover:text-accent transition-colors duration-300 py-2 font-poppins" onClick={() => setIsMenuOpen(false)}>
              Pourquoi Nous
            </a>
            <a href="#contact" className="text-primary hover:text-accent transition-colors duration-300 py-2 font-poppins" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a 
              href="#inscription" 
              className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition-all duration-300 text-center font-poppins font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              S'inscrire
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="accueil" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-accent" />
              <span className="font-poppins text-sm">Centre de Formation Professionnel</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl m-0 leading-tight">
              <span className="font-cairo font-extrabold">المدرسة الذكية</span>
              <br />
              <span className="font-poppins font-bold">Smart School</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-poppins">
              Votre destination pour l'excellence éducative à Alger. Formations en informatique, langues et préparation IELTS avec des enseignants experts.
            </p>

            <p className="text-base md:text-lg text-gray-300 font-cairo">
              وجهتك نحو التميز التعليمي في الجزائر. دورات تدريبية في المعلوماتية، اللغات، وتحضير امتحان IELTS مع معلمين خبراء.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#formations" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 shadow-lg font-poppins font-semibold">
                Découvrir nos formations
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 font-poppins font-medium">
                Nous contacter
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl text-accent font-poppins font-bold">500+</div>
                <div className="text-sm text-gray-300 font-poppins">Étudiants</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl text-accent font-poppins font-bold">10+</div>
                <div className="text-sm text-gray-300 font-poppins">Formations</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl text-accent font-poppins font-bold">95%</div>
                <div className="text-sm text-gray-300 font-poppins">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="\image.png"
                alt="Students learning at Smart School"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-xl shadow-xl max-w-xs animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl font-poppins font-bold">🎓</div>
                <div>
                  <p className="text-sm text-gray-600 m-0 font-poppins">Promotion d'ouverture</p>
                  <p className="text-xl m-0 font-poppins font-bold">-10% sur tout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Course Card Component
function CourseCard({ icon, title, titleAr, description, features, price, image }) {
  const getIcon = () => {
    switch(icon) {
      case 'graduation': return <GraduationCap className="w-6 h-6 text-primary" />;
      case 'monitor': return <Monitor className="w-6 h-6 text-primary" />;
      case 'languages': return <Languages className="w-6 h-6 text-primary" />;
      default: return <BookOpen className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
          {getIcon()}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl text-primary m-0 mb-1 font-poppins font-semibold">{title}</h3>
          <p className="text-base text-gray-600 m-0 font-cairo">{titleAr}</p>
        </div>
        <p className="text-gray-600 leading-relaxed font-poppins">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700 font-poppins">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
          {price ? (
            <div>
              <p className="text-sm text-gray-500 m-0 font-poppins">À partir de</p>
              <p className="text-2xl text-accent m-0 font-poppins font-bold">{price}</p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-500 m-0 font-poppins">Prix personnalisé</p>
            </div>
          )}
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors duration-300 font-poppins font-medium">
            S'inscrire
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

// Courses Section
function CoursesSection({ courses }) {
  return (
    <section id="formations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-poppins">
            <BookOpen className="w-5 h-5" />
            <span>Nos Formations</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary m-0 font-poppins font-bold">
            Découvrez nos programmes
          </h2>
          <p className="text-xl text-primary max-w-2xl mx-auto font-cairo">
            اكتشف برامجنا التدريبية المتخصصة
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
            Des formations de qualité adaptées à vos besoins professionnels et académiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course._id || course.id} {...course} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4 font-poppins">
            Besoin d'une formation personnalisée ?
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 shadow-lg font-poppins font-semibold">
            Contactez-nous pour plus d'informations
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function FeatureCard({ icon, title, titleAr, description }) {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs">✓</div>
      </div>
      <h3 className="text-xl text-primary mb-2 m-0 font-poppins font-semibold">{title}</h3>
      <p className="text-base text-gray-600 mb-3 m-0 font-cairo">{titleAr}</p>
      <p className="text-gray-600 leading-relaxed font-poppins">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
    </div>
  );
}

function WhyChooseUsSection() {
  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Infrastructures Modernes",
      titleAr: "بنية تحتية حديثة",
      description: "Bibliothèque équipée, salles de réunion climatisées, et espaces de co-working confortables pour un apprentissage optimal."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enseignants Experts",
      titleAr: "معلمون خبراء",
      description: "Notre équipe pédagogique est composée d'enseignants qualifiés, expérimentés et passionnés par la transmission du savoir."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification Officielle",
      titleAr: "شهادات رسمية",
      description: "Recevez des certificats reconnus à la fin de chaque formation pour valoriser vos compétences sur le marché du travail."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Apprentissage Flexible",
      titleAr: "تعلم مرن",
      description: "Choisissez entre des cours en présentiel à Mehmadia ou à distance en ligne, selon vos disponibilités et préférences."
    }
  ];

  return (
    <section id="pourquoi" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-poppins">
            <Award className="w-5 h-5" />
            <span>Pourquoi Nous Choisir</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary m-0 font-poppins font-bold">
            ecole smart à votre service
          </h2>
          <p className="text-xl text-primary max-w-2xl mx-auto font-cairo">
            المدرسة الذكية في خدمتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Smart School facilities"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl text-accent font-poppins font-bold">100%</div>
                    <div className="text-xs text-gray-600 font-poppins">Équipé</div>
                  </div>
                  <div>
                    <div className="text-2xl text-accent font-poppins font-bold">+15</div>
                    <div className="text-xs text-gray-600 font-poppins">Formateurs</div>
                  </div>
                  <div>
                    <div className="text-2xl text-accent font-poppins font-bold">24/7</div>
                    <div className="text-xs text-gray-600 font-poppins">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">🎓</div>
              <p className="text-sm opacity-90 m-0 font-poppins">Programmes accrédités</p>
            </div>
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">📚</div>
              <p className="text-sm opacity-90 m-0 font-poppins">Matériel inclus</p>
            </div>
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">💼</div>
              <p className="text-sm opacity-90 m-0 font-poppins">Orientation carrière</p>
            </div>
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm opacity-90 m-0 font-poppins">Taux de réussite élevé</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Promotion Banner
function PromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-accent via-accent/90 to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/30">
            <Sparkles className="w-5 h-5" />
            <span className="font-poppins">Offre Spéciale</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white m-0 leading-tight font-poppins font-extrabold">
            PROMOTION D'OUVERTURE
          </h2>
          <div className="bg-white/95 backdrop-blur-md inline-block px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl md:text-6xl lg:text-7xl text-accent m-0 font-poppins font-black">-10%</div>
          </div>
          <p className="text-xl md:text-2xl text-white font-poppins font-semibold">SUR TOUTES LES FORMATIONS</p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-cairo">خصم 10% على جميع الدورات التدريبية - عرض لفترة محدودة</p>
          <div className="inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full shadow-xl">
            <Clock className="w-5 h-5 text-accent" />
            <span className="font-poppins font-semibold">Offre valable jusqu'au 31 Mars 2026</span>
          </div>
          <div className="pt-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-xl hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg font-poppins font-bold">
              Profitez de l'offre maintenant
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-white/80 font-poppins">* Réduction applicable sur toutes les nouvelles inscriptions</p>
        </div>
      </div>
    </section>
  );
}

// Contact Footer
function ContactFooter({ onMessageSent }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        if (onMessageSent) onMessageSent();
      } else {
        alert('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      alert('Erreur de connexion au serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 m-0 font-poppins font-bold">Contactez-nous</h2>
              <p className="text-xl text-gray-300 mb-2 font-cairo">اتصل بنا</p>
              <p className="text-gray-300 leading-relaxed font-poppins">
                Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter !
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="m-0 mb-1 font-poppins font-semibold">Adresse</p>
                  <p className="text-gray-300 m-0 font-poppins">Mehmadia<br />Alger, Algérie</p>
                </div>
              </div>

              <a href="tel:0775818782" className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="m-0 mb-1 font-poppins font-semibold">Téléphone</p>
                  <p className="text-gray-300 m-0 font-poppins">0775 818 782</p>
                </div>
              </a>

              <a href="mailto:smartscholl@gmail.com" className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="m-0 mb-1 font-poppins font-semibold">Email</p>
                  <p className="text-gray-300 m-0 break-all font-poppins">smartscholl@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="m-0 mb-1 font-poppins font-semibold">Horaires</p>
                  <p className="text-gray-300 m-0 font-poppins">Samedi - Jeudi: 8h00 - 18h00<br />Vendredi: Fermé</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a href="https://www.facebook.com/profile.php?id=61571779423833" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors duration-300 font-poppins font-medium shadow-lg">
                  <Facebook className="w-5 h-5" />
                  <span>Suivez-nous sur Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-2xl mb-6 m-0 font-poppins font-semibold">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-poppins">Nom complet</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                  required 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-poppins" 
                  placeholder="Votre nom" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-poppins">Email</label>
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  required 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-poppins" 
                  placeholder="votre.email@exemple.com" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-poppins">Téléphone</label>
                <input 
                  type="tel" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                  required 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-poppins" 
                  placeholder="06XX XXX XXX" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-poppins">Message</label>
                <textarea 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  required 
                  rows={4} 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all duration-300 font-poppins" 
                  placeholder="Parlez-nous de vos besoins..." 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-accent text-white px-6 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 flex items-center justify-center gap-2 font-poppins font-semibold shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {loading ? 'Envoi...' : 'Envoyer le message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl mb-6 text-center font-poppins font-semibold">Notre Localisation</h3>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.7!2d3.0588!3d36.7525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ1JzA5LjAiTiAzwrAwMyczMS43IkU!5e0!3m2!1sen!2sdz!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="Smart School Location - Mehmadia, Alger" 
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-300 m-0 font-poppins">© 2026 Smart School. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <a href="#accueil" className="text-gray-300 hover:text-accent transition-colors duration-300 font-poppins">Accueil</a>
              <span className="text-gray-600">•</span>
              <a href="#formations" className="text-gray-300 hover:text-accent transition-colors duration-300 font-poppins">Formations</a>
              <span className="text-gray-600">•</span>
              <a href="#contact" className="text-gray-300 hover:text-accent transition-colors duration-300 font-poppins">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== COMPOSANTS DE L'ADMIN PANEL ====================

// Course Form Modal
function CourseFormModal({ course, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: course?.title || '',
    titleAr: course?.titleAr || '',
    description: course?.description || '',
    features: course?.features || ['', '', '', ''],
    price: course?.price || '',
    image: course?.image || '',
    icon: course?.icon || 'graduation'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-poppins font-bold text-primary mb-6">
          {course ? 'Modifier la formation' : 'Ajouter une formation'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Titre (FR)</label>
              <input 
                type="text" 
                value={formData.title} 
                onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins" 
              />
            </div>
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Titre (AR)</label>
              <input 
                type="text" 
                value={formData.titleAr} 
                onChange={(e) => setFormData({ ...formData, titleAr: e.target.value })} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-cairo" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-poppins text-gray-700 mb-2">Description</label>
            <textarea 
              value={formData.description} 
              onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
              required 
              rows={3} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins" 
            />
          </div>

          <div>
            <label className="block text-sm font-poppins text-gray-700 mb-2">Caractéristiques (une par ligne)</label>
            <textarea 
              value={formData.features.join('\n')} 
              onChange={(e) => setFormData({ ...formData, features: e.target.value.split('\n').filter(f => f.trim()) })} 
              required 
              rows={4} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins" 
              placeholder="40 heures de formation intensive&#10;Listening, Speaking, Reading & Writing&#10;Tests blancs et simulations d'examen"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Prix (laisser vide si personnalisé)</label>
              <input 
                type="text" 
                value={formData.price} 
                onChange={(e) => setFormData({ ...formData, price: e.target.value })} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins" 
                placeholder="17,000 DA" 
              />
            </div>
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Icône</label>
              <select 
                value={formData.icon} 
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins"
              >
                <option value="graduation">IELTS</option>
                <option value="monitor">Informatique</option>
                <option value="languages">Langues</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-poppins text-gray-700 mb-2">URL de l'image</label>
            <input 
              type="url" 
              value={formData.image} 
              onChange={(e) => setFormData({ ...formData, image: e.target.value })} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins" 
              placeholder="https://images.unsplash.com/..." 
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" className="flex-1 bg-accent text-white py-3 rounded-lg hover:bg-accent-hover transition-colors font-poppins font-semibold">
              {course ? 'Modifier' : 'Ajouter'}
            </button>
            <button type="button" onClick={onClose} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-poppins font-semibold">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Admin Dashboard
function AdminDashboard({ onLogout, onBackToSite }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [courses, setCourses] = useState([]);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({
    totalMessages: 0,
    waitingMessages: 0,
    confirmedMessages: 0,
    totalCourses: 0
  });
  const [loading, setLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const token = localStorage.getItem('token');

  // Charger les données
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      console.log('📊 Chargement des données avec token:', token);
      
      const [coursesRes, messagesRes, statsRes] = await Promise.all([
        fetch(`${API_URL}/courses`),
        fetch(`${API_URL}/messages`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_URL}/dashboard/stats`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      console.log('📊 Courses response:', coursesRes.status);
      console.log('📧 Messages response:', messagesRes.status);
      console.log('📈 Stats response:', statsRes.status);

      if (!coursesRes.ok || !messagesRes.ok || !statsRes.ok) {
        throw new Error('Erreur de chargement des données');
      }

      const coursesData = await coursesRes.json();
      const messagesData = await messagesRes.json();
      const statsData = await statsRes.json();

      setCourses(coursesData);
      setMessages(messagesData);
      setStats(statsData.stats);
    } catch (error) {
      console.error('❌ Erreur chargement données:', error);
    } finally {
      setLoading(false);
    }
  };

  // حساب الأرباح (17000 DA لكل confirmed)
  const calculateEarnings = () => {
    return stats.confirmedMessages * 17000;
  };

  // الحصول على إحصائيات الشهر الحالي
  const getMonthlyStats = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const monthlyMessages = messages.filter(msg => {
      const msgDate = new Date(msg.createdAt);
      return msgDate.getMonth() === currentMonth && msgDate.getFullYear() === currentYear;
    });

    const monthlyConfirmed = monthlyMessages.filter(m => m.status === 'confirmed').length;

    return {
      total: monthlyMessages.length,
      confirmed: monthlyConfirmed,
      earnings: monthlyConfirmed * 17000
    };
  };

  // بيانات الرسم البياني (آخر 7 أشهر)
  const getChartData = () => {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    
    // نأخذ آخر 7 أشهر
    const last7Months = [];
    for (let i = 6; i >= 0; i--) {
      let monthIndex = currentMonth - i;
      let year = currentYear;
      if (monthIndex < 0) {
        monthIndex += 12;
        year -= 1;
      }
      
      const monthMessages = messages.filter(msg => {
        const msgDate = new Date(msg.createdAt);
        return msgDate.getMonth() === monthIndex && msgDate.getFullYear() === year;
      });
      
      last7Months.push({
        month: months[monthIndex],
        messages: monthMessages.length,
        confirmed: monthMessages.filter(m => m.status === 'confirmed').length
      });
    }
    
    return last7Months;
  };

  const monthlyStats = getMonthlyStats();
  const chartData = getChartData();
  const totalEarnings = calculateEarnings();

  // تغيير حالة الرسالة
  const updateMessageStatus = async (messageId, newStatus) => {
    try {
      const response = await fetch(`${API_URL}/messages/${messageId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (response.ok) {
        setMessages(messages.map(msg => 
          msg._id === messageId ? { ...msg, status: newStatus } : msg
        ));
        // تحديث الإحصائيات
        fetchDashboardData();
      }
    } catch (error) {
      console.error('Erreur mise à jour:', error);
    }
  };

  // حذف رسالة
  const deleteMessage = async (messageId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
      try {
        const response = await fetch(`${API_URL}/messages/${messageId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.ok) {
          setMessages(messages.filter(msg => msg._id !== messageId));
          fetchDashboardData();
        }
      } catch (error) {
        console.error('Erreur suppression:', error);
      }
    }
  };

  // إضافة دورة جديدة
  const addCourse = async (newCourse) => {
    try {
      const response = await fetch(`${API_URL}/courses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newCourse)
      });
      
      if (response.ok) {
        const course = await response.json();
        setCourses([...courses, course]);
        setShowAddForm(false);
      }
    } catch (error) {
      console.error('Erreur ajout:', error);
    }
  };

  // تعديل دورة
  const updateCourse = async (updatedCourse) => {
    try {
      const response = await fetch(`${API_URL}/courses/${updatedCourse._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedCourse)
      });
      
      if (response.ok) {
        const course = await response.json();
        setCourses(courses.map(c => c._id === course._id ? course : c));
        setEditingCourse(null);
      }
    } catch (error) {
      console.error('Erreur modification:', error);
    }
  };

  // حذف دورة
  const deleteCourse = async (courseId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      try {
        const response = await fetch(`${API_URL}/courses/${courseId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.ok) {
          setCourses(courses.filter(course => course._id !== courseId));
        }
      } catch (error) {
        console.error('Erreur suppression:', error);
      }
    }
  };

  // تصفية الرسائل
  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.message?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || msg.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-poppins">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - DesignMediaX */}
      <div className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-primary text-white shadow-xl transition-all duration-300 fixed h-full overflow-y-auto`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            {!sidebarCollapsed && <h2 className="text-2xl font-poppins font-bold">DesignMediaX</h2>}
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-white/60 hover:text-white transition-colors"
            >
              {sidebarCollapsed ? '→' : '←'}
            </button>
          </div>
          
          <nav className="space-y-6">
            {/* MAIN Section */}
            <div>
              {!sidebarCollapsed && <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-poppins">MAIN</p>}
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-poppins flex items-center gap-3 ${
                    activeTab === 'dashboard' ? 'bg-accent text-white' : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <LayoutDashboard className="w-5 h-5" />
                  {!sidebarCollapsed && 'Dashboard'}
                </button>
                
                <div>
                  {!sidebarCollapsed && <p className="text-gray-400 text-sm px-4 py-2 font-poppins">Lists</p>}
                  <div className={`${sidebarCollapsed ? '' : 'ml-4'} space-y-1`}>
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins text-sm flex items-center gap-3">
                      <Users className="w-5 h-5" />
                      {!sidebarCollapsed && 'Users'}
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins text-sm flex items-center gap-3">
                      <BookOpen className="w-5 h-5" />
                      {!sidebarCollapsed && 'Products'}
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins text-sm flex items-center gap-3">
                      <Award className="w-5 h-5" />
                      {!sidebarCollapsed && 'Orders'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div>
              {!sidebarCollapsed && <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-poppins">Charts</p>}
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins flex items-center gap-3">
                  <BarChart3 className="w-5 h-5" />
                  {!sidebarCollapsed && 'Stats'}
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins flex items-center gap-3 relative">
                  <Mail className="w-5 h-5" />
                  {!sidebarCollapsed && 'Notifications'}
                  {stats.waitingMessages > 0 && (
                    <span className="ml-auto bg-accent text-white text-xs px-2 py-1 rounded-full">
                      {stats.waitingMessages}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Service Section */}
            <div>
              {!sidebarCollapsed && <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-poppins">Service</p>}
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins flex items-center gap-3">
                  <Settings className="w-5 h-5" />
                  {!sidebarCollapsed && 'System Health'}
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins flex items-center gap-3">
                  <Settings className="w-5 h-5" />
                  {!sidebarCollapsed && 'Settings'}
                </button>
              </div>
            </div>

            {/* User Interface */}
            <div>
              {!sidebarCollapsed && <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-poppins">User Interface</p>}
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  {!sidebarCollapsed && 'Profile'}
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  {!sidebarCollapsed && 'Calendar'}
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors font-poppins flex items-center gap-3">
                  <Star className="w-5 h-5" />
                  {!sidebarCollapsed && 'Helper'}
                </button>
                <button 
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-accent hover:bg-accent/10 rounded-lg transition-colors font-poppins font-semibold flex items-center gap-3"
                >
                  <LogIn className="w-5 h-5" />
                  {!sidebarCollapsed && 'Logout'}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${sidebarCollapsed ? 'ml-20' : 'ml-64'} flex-1 p-8 transition-all duration-300`}>
        {/* Header avec bouton retour site */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-poppins font-bold text-primary">
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'messages' && 'Messages'}
            {activeTab === 'courses' && 'Formations'}
          </h1>
          <button 
            onClick={onBackToSite}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-poppins flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Retour au site
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Cards - Première rangée */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* CUSTOMERS */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-poppins mb-1">CUSTOMERS</p>
                    <h3 className="text-3xl font-poppins font-bold text-primary">{stats.totalMessages}</h3>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <button 
                  onClick={() => setActiveTab('messages')}
                  className="text-blue-500 text-sm font-poppins mt-4 hover:text-blue-600 transition-colors"
                >
                  See details →
                </button>
              </div>

              {/* ORDERS */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-poppins mb-1">ORDERS</p>
                    <h3 className="text-3xl font-poppins font-bold text-primary">{stats.confirmedMessages}</h3>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setActiveTab('messages');
                    setStatusFilter('confirmed');
                  }}
                  className="text-green-500 text-sm font-poppins mt-4 hover:text-green-600 transition-colors"
                >
                  View all orders →
                </button>
              </div>

              {/* TOTAL EARNINGS */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-poppins mb-1">TOTAL EARNINGS</p>
                    <h3 className="text-3xl font-poppins font-bold text-primary">{totalEarnings.toLocaleString()} DA</h3>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <button className="text-purple-500 text-sm font-poppins mt-4 hover:text-purple-600 transition-colors">
                  View net earnings →
                </button>
              </div>

              {/* MY BALANCE */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-accent">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-poppins mb-1">MY BALANCE</p>
                    <h3 className="text-3xl font-poppins font-bold text-primary">{monthlyStats.earnings.toLocaleString()} DA</h3>
                  </div>
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <button className="text-accent text-sm font-poppins mt-4 hover:text-accent-hover transition-colors">
                  Withdraw money →
                </button>
              </div>
            </div>

            {/* Total Revenue Card */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-xl p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/80 text-sm font-poppins mb-2">Total Revenue</p>
                  <div className="flex items-center gap-4">
                    <h2 className="text-4xl font-poppins font-bold">{totalEarnings.toLocaleString()} DA</h2>
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-poppins">
                      {stats.totalMessages > 0 ? Math.round((stats.confirmedMessages/stats.totalMessages)*100) : 0}%
                    </span>
                  </div>
                  <p className="text-white/60 text-sm font-poppins mt-1">
                    Total sales made today • {new Date().toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm font-poppins">Previous transactions</p>
                  <p className="text-white/60 text-sm font-poppins mt-1">
                    Target: {(stats.totalMessages * 17000).toLocaleString()} DA • 
                    Last Week: {(stats.confirmedMessages * 17000 * 0.7).toLocaleString()} DA • 
                    Last Month: {(stats.confirmedMessages * 17000 * 2.5).toLocaleString()} DA
                  </p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-poppins font-bold text-primary mb-6">Activité mensuelle</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {chartData.map((data, index) => {
                  const maxMessages = Math.max(...chartData.map(d => d.messages), 1);
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center group">
                      <div className="w-full relative h-48">
                        {/* Barre des messages confirmés */}
                        <div 
                          className="absolute bottom-0 w-full bg-accent rounded-t-lg transition-all duration-300 group-hover:opacity-80"
                          style={{ height: `${(data.confirmed / maxMessages) * 100}%` }}
                        ></div>
                        {/* Barre totale des messages (plus claire) */}
                        <div 
                          className="absolute bottom-0 w-full bg-accent/30 rounded-t-lg"
                          style={{ height: `${(data.messages / maxMessages) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 font-poppins mt-2">{data.month}</span>
                      <span className="text-xs text-accent font-poppins">{data.confirmed}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-4 text-xs text-gray-500 font-poppins">
                <span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span><span>Juil</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center">
              <button className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent-hover transition-colors font-poppins font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                SUBSCRIBE!
              </button>
            </div>

            {/* Derniers messages */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="text-xl font-poppins font-bold text-primary mb-4">Derniers messages</h3>
              <div className="space-y-3">
                {messages.slice(0, 5).map(msg => (
                  <div key={msg._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        msg.status === 'confirmed' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        {msg.status === 'confirmed' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Clock3 className="w-4 h-4 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-poppins font-medium text-primary">{msg.name}</p>
                        <p className="text-xs text-gray-500 font-poppins">{msg.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 font-poppins">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                      <button 
                        onClick={() => {
                          setActiveTab('messages');
                          setSearchTerm(msg.name);
                        }}
                        className="text-accent hover:text-accent-hover"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-poppins font-bold text-primary">Gestion des messages</h2>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins w-full sm:w-64" 
                  />
                </div>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins">
                  <option value="all">Tous les statuts</option>
                  <option value="waiting">En attente</option>
                  <option value="confirmed">Confirmés</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredMessages.map(msg => (
                <div key={msg._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-poppins font-semibold text-primary text-lg">{msg.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-poppins ${
                          msg.status === 'confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {msg.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                        </span>
                        <span className="text-sm text-gray-400 font-poppins">{new Date(msg.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-600 font-poppins mb-2">{msg.message}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {msg.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {msg.phone}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {msg.status === 'waiting' && (
                        <button onClick={() => updateMessageStatus(msg._id, 'confirmed')} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Marquer comme confirmé">
                          <Check className="w-5 h-5" />
                        </button>
                      )}
                      {msg.status === 'confirmed' && (
                        <button onClick={() => updateMessageStatus(msg._id, 'waiting')} className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors" title="Marquer comme en attente">
                          <Clock3 className="w-5 h-5" />
                        </button>
                      )}
                      <button onClick={() => deleteMessage(msg._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Supprimer">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {filteredMessages.length === 0 && (
                <div className="text-center py-12">
                  <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-poppins">Aucun message trouvé</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-poppins font-bold text-primary">Gestion des formations</h2>
                <button onClick={() => setShowAddForm(true)} className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors font-poppins">
                  <Plus className="w-5 h-5" />
                  Ajouter une formation
                </button>
              </div>

              <div className="grid gap-6">
                {courses.map(course => (
                  <div key={course._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4">
                      <img src={course.image} alt={course.title} className="w-full md:w-48 h-32 object-cover rounded-lg" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-poppins font-semibold text-primary">{course.title}</h3>
                            <p className="text-gray-600 font-cairo mb-2">{course.titleAr}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button onClick={() => setEditingCourse(course)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-5 h-5" />
                            </button>
                            <button onClick={() => deleteCourse(course._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        <p className="text-gray-600 font-poppins text-sm mb-2">{course.description}</p>
                        {course.price && (
                          <p className="text-accent font-poppins font-bold">{course.price}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for adding/editing course */}
      {(showAddForm || editingCourse) && (
        <CourseFormModal 
          course={editingCourse}
          onClose={() => {
            setShowAddForm(false);
            setEditingCourse(null);
          }}
          onSave={(courseData) => {
            if (editingCourse) {
              updateCourse({ ...courseData, _id: editingCourse._id });
            } else {
              addCourse(courseData);
            }
          }}
        />
      )}
    </div>
  );
}

// ==================== MAIN APP ====================
function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminLogin, setAdminLogin] = useState({ username: "", password: "" });

  // Charger les formations au démarrage
  useEffect(() => {
    const path = window.location.pathname;
    
    // إذا كان الرابط هو الرابط السري، نظهر نافذة تسجيل الدخول
    if (path === SECRET_PATH) {
      setShowLogin(true);
    }
    
    fetchCourses();
    checkAuth();
  }, []);

  // مراقبة تغييرات الرابط
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === SECRET_PATH) {
        setShowLogin(true);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${API_URL}/courses`);
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Erreur chargement formations:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      console.log('محاولة تسجيل الدخول:', adminLogin.username);
      
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminLogin)
      });
      
      const data = await response.json();
      console.log('استجابة السيرفر:', data);
      
      if (response.ok) {
        // حفظ التوكن
        localStorage.setItem('token', data.token);
        console.log('✅ تم حفظ التوكن:', data.token);
        
        setIsAuthenticated(true);
        setShowLogin(false);
        setShowAdmin(true);
        
        // تغيير الرابط إلى لوحة التحكم
        window.history.pushState({}, '', '/admin-dashboard');
        
        alert('Connexion réussie!');
      } else {
        alert(data.message || 'Nom d\'utilisateur ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('❌ Erreur de connexion:', error);
      alert('Erreur de connexion au serveur. Vérifiez que le backend est lancé sur http://localhost:5000');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setShowAdmin(false);
    window.history.pushState({}, '', '/');
  };

  const handleBackToSite = () => {
    setShowAdmin(false);
    window.history.pushState({}, '', '/');
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    window.history.pushState({}, '', '/');
  };

  const handleMessageSent = () => {
    fetchCourses();
  };

  if (showAdmin) {
    return (
      <AdminDashboard 
        onLogout={handleLogout}
        onBackToSite={handleBackToSite}
      />
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-poppins">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection courses={courses} />
        <WhyChooseUsSection />
        <PromotionBanner />
      </main>
      <ContactFooter onMessageSent={handleMessageSent} />
      
      {/* Admin Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
            <button 
              onClick={handleCloseLogin} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <LayoutDashboard className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-poppins font-bold text-primary">Admin Login</h2>
              <p className="text-gray-500 font-poppins text-sm">Entrez vos identifiants</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-poppins text-gray-700 mb-2">Nom d'utilisateur</label>
                <input 
                  type="text" 
                  value={adminLogin.username} 
                  onChange={(e) => setAdminLogin({ ...adminLogin, username: e.target.value })} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins" 
                  placeholder="admin" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-poppins text-gray-700 mb-2">Mot de passe</label>
                <input 
                  type="password" 
                  value={adminLogin.password} 
                  onChange={(e) => setAdminLogin({ ...adminLogin, password: e.target.value })} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-poppins" 
                  placeholder="••••••••" 
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent-hover transition-colors font-poppins font-semibold shadow-lg"
              >
                Se connecter
              </button>
            </form>

            <p className="text-xs text-center text-gray-400 mt-4 font-poppins">
              Identifiants: admin / admin123
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;