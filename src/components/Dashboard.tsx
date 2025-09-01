import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LogOut, Star } from "lucide-react";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-6 border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center glow-effect">
              <span className="text-lg font-bold text-primary-foreground">R</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text">rate.it</h1>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="smooth-transition hover:glow-effect"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl animate-fade-in">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-6 flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-primary fill-primary animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <CardTitle className="text-4xl font-bold mb-4">
                <span className="gradient-text">Welcome to rate.it</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                You have successfully authenticated and gained access to the platform. 
                This is your secure dashboard where you can manage your rating services.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Secure Access", desc: "Your credentials are protected" },
                  { title: "Ready to Rate", desc: "Platform is fully operational" },
                  { title: "Welcome Aboard", desc: "Thanks for joining rate.it" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-muted/30 border border-border/50 smooth-transition hover:glow-effect"
                  >
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;