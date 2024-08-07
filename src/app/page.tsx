import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <nav className="absolute right-0 top-0">
        <ModeToggle />
      </nav>

      <aside className="hidden lg:block">
        <Image src="/login.png" alt="" width={554} height={832} />
      </aside>

      <section className="flex flex-col items-center w-full space-y-7">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48" />
        </svg>

        <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>

        <Tabs className="flex flex-col" defaultValue="entrar">
          <TabsList className="justify-center">
            <TabsTrigger value="entrar">Entrar</TabsTrigger>
            <TabsTrigger value="registrar">Registrar</TabsTrigger>
          </TabsList>

          <TabsContent value="entrar">
            <form action="">
              <Label htmlFor="email" className="space-y-2">Email</Label>
              <Input id="email" />
              <Label htmlFor="senha" className="space-y-2">Senha</Label>
              <Input id="senha" type="password" />
              <Button type="submit">Entrar</Button>
            </form>
          </TabsContent>

          <TabsContent value="registrar">
            <form action="">
              <Label htmlFor="nome" className="space-y-2">Nome</Label>
              <Input id="nome" />
              <Label htmlFor="bio" className="space-y-2">Bio</Label>
              <Input id="bio" />
              <Label htmlFor="email" className="space-y-2">Email</Label>
              <Input id="email" />
              <Label htmlFor="senha" className="space-y-2">Senha</Label>
              <Input id="senha" type="password" />
              <Button type="submit">Entrar</Button>
            </form>
          </TabsContent>

          <AlertDialog>
            <AlertDialogTrigger className="bg-primary p-2 px-3 rounded-md w-max self-center">Open</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </Tabs>


      </section>
    </main>
  );
}
