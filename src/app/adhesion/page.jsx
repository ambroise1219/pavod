"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, TrendingUp, Mail, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    {...fadeIn}
  >
    <Icon className="w-12 h-12 text-yellow-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const AdhesionPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header /> 
      <header className="bg-black text-white py-12 pt-72 relative">
        <Link href="/" className="absolute top-4 left-4 flex items-center text-white hover:text-yellow-500 transition-colors">
          <ArrowLeft className="w-6 h-6 mr-2" />
          Retour
        </Link>
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           Adhésion à la PAVOD
          </motion.h1>
          
        </div>
      </header>
        <main className="container mx-auto py-16 px-4 ">
     
        <motion.section className="mb-16 text-center" {...fadeIn}>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Rejoignez la Plateforme des Acheteurs et Vendeurs d&apos;Or et du Diamant (PAVOD) et devenez un acteur clé de l&apos;industrie de l&apos;or et du diamant en Côte d&apos;Ivoire. Notre communauté s&apos;engage à promouvoir l&apos;excellence, l&apos;intégrité et la prospérité dans le secteur.
          </p>
          <Image src="/man.jpg" width={800} height={400} alt="Illustration PAVOD" className="rounded-lg shadow-lg mx-auto" />
        </motion.section>

        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">Pourquoi adhérer à la PAVOD ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Users}
              title="Réseau Professionnel"
              description="Accédez à un réseau exclusif de professionnels de l'industrie de l'or et du diamant."
            />
            <FeatureCard 
              icon={Shield}
              title="Protection des Intérêts"
              description="Bénéficiez d'un cadre réglementaire solide qui protège vos intérêts commerciaux."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Opportunités de Croissance"
              description="Profitez d'opportunités uniques pour développer votre activité et votre expertise."
            />
          </div>
        </motion.section>

        <motion.section className="mb-16 bg-yellow-100 p-8 rounded-lg shadow-lg" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6 text-center">Processus d&apos;Adhésion</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li className="text-lg">Contactez-nous pour exprimer votre intérêt à devenir membre.</li>
            <li className="text-lg">Remplissez le formulaire d&apos;adhésion que nous vous enverrons.</li>
            <li className="text-lg">Fournissez les documents nécessaires pour vérifier votre éligibilité.</li>
            <li className="text-lg">Participez à un entretien avec notre comité d&apos;adhésion.</li>
            <li className="text-lg">Après approbation, payez les frais d&apos;adhésion annuels.</li>
            <li className="text-lg">Recevez votre certificat de membre et accédez à tous les avantages de la PAVOD.</li>
          </ol>
        </motion.section>

        <motion.section className="mb-16 text-center" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">Prêt à nous rejoindre ?</h2>
          <p className="text-lg mb-8">
            Faites le premier pas vers une collaboration fructueuse au sein de l&apos;industrie de l&apos;or et du diamant. Contactez-nous dès aujourd&apos;hui pour commencer votre processus d&apos;adhésion.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-yellow-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-700 transition duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contactez-nous pour adhérer
          </Link>
        </motion.section>

     
      </main>
    </div>
    <Footer />
    </div>
  );
};

export default AdhesionPage;