import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="container py-6 space-y-10">
      <section className="flex flex-col items-center justify-center py-12 text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          FMCG Suite
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
          A complete sales and route management system for FMCG businesses
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">View Products</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Management</CardTitle>
            <CardDescription>Upload, filter, and manage your product catalog</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Easily manage your entire product inventory with advanced filtering and bulk operations.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Route Planning</CardTitle>
            <CardDescription>Optimize delivery routes for salespeople</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Create efficient delivery routes with our interactive map interface and optimization tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Delivery Tracking</CardTitle>
            <CardDescription>Monitor deliveries and returns in real-time</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Track product deliveries and returns with a user-friendly mobile interface for field staff.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
