import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { TaskCard } from "@/widgets/cards";
import { DoughnutChart } from "@/widgets/charts";
import {
  CardData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

export function Home() {
  return (
    <div className="mt-4">
      <div className="mb-10 grid grid-cols-1 gap-6">
        <Card className="overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Các công việc <br className="hidden sm:inline" /> sắp hết hạn
              </Typography>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4 ">
                {CardData.map(({ tag, title, footer, ...rest }) => {
                  return (
                    <TaskCard
                      key={title}
                      {...rest}
                      title={title}
                      tag={tag}
                      footer={
                        <Typography className="font-normal text-blue-gray-600">
                          <div>Deadline</div>
                          <strong className="font-bold">{footer.value}</strong>
                          &nbsp;{footer.label}
                        </Typography>
                      }
                    />
                  );
                })}
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
        {statisticsChartsData.map((props) => (
          <DoughnutChart data={props} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Home;
