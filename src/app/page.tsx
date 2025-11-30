import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import CustomerLogos from '@/components/sections/customer-logos';
import TypeScriptFeature from '@/components/sections/typescript-feature';
import WorkflowsFeature from '@/components/sections/workflows-feature';
import EnrichmentsGrid from '@/components/sections/enrichments-grid';
import AiChatFeature from '@/components/sections/ai-chat-feature';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-12 lg:py-20">
          <CustomerLogos />
        </div>

        <div className="h-6 md:h-10" />
        
        <TypeScriptFeature />
        
        <div className="h-6 md:h-10" />
        
        <WorkflowsFeature />
        
        <EnrichmentsGrid />
        
        <AiChatFeature />
      </main>
      
      <Footer />
    </div>
  );
}