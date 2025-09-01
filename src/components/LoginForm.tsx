import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
interface LoginFormProps {
  onLogin: () => void;
}
const LoginForm = ({
  onLogin
}: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (username === "rateit.ltd" && password === "5Stars!") {
      toast({
        title: "Welcome!",
        description: "Login successful. Redirecting..."
      });
      setTimeout(onLogin, 500);
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password. Please try again.",
        variant: "destructive"
      });
    }
    setIsLoading(false);
  };
  return <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl animate-fade-in">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-effect animate-pulse-glow">
            <span className="text-2xl font-bold text-primary-foreground">R</span>
          </div>
          
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <Input id="username" type="text" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} required className="smooth-transition focus:glow-effect" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required className="smooth-transition focus:glow-effect" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary-glow smooth-transition glow-effect" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>;
};
export default LoginForm;