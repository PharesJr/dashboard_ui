import Calendar from "@/components/Cards/Calendar";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Line from "@/components/Cards/Line";
import { TableDemo } from "@/components/Cards/Table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[20px]">
      <div className="grid xl:grid-cols-2 gap-[20px]">
         {/* Line Chart */}
         <Line />
        
        <div className="grid gap-[20px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[20px] mb-[20px] lg:h-[400px]">
{/* SunBurst */}
      <General />

        {/* Orders Table */}
        <Card className="p-1 max-h-[400px] overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>A detailed day record</CardDescription>
          </CardHeader>
          <CardContent>
            <TableDemo />
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="p-1 max-h-[400px] overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>A detailed Users record</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTableDemo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
