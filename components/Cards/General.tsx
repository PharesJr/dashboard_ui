"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ResponsiveSunburst } from "@nivo/sunburst";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveSunburst = ({ data }: { data: any }) => (
  <ResponsiveSunburst
    data={data}
    margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
    id="name"
    value="loc"
    cornerRadius={2}
    borderColor={{ theme: "background" }}
    colors={{ scheme: "nivo" }}
    childColor={{
      from: "color",
      modifiers: [["brighter", 0.1]],
    }}
    enableArcLabels={true}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 1.4]],
    }}
  />
);

const General = () => {
  const data = {
    name: "nivo",
    color: "hsl(303, 70%, 50%)",
    children: [
      {
        name: "viz",
        color: "hsl(334, 70%, 50%)",
        children: [
          {
            name: "stack",
            color: "hsl(259, 70%, 50%)",
            children: [
              {
                name: "cchart",
                color: "hsl(150, 70%, 50%)",
                loc: 116271,
              },
              {
                name: "xAxis",
                color: "hsl(341, 70%, 50%)",
                loc: 189241,
              },
              {
                name: "yAxis",
                color: "hsl(261, 70%, 50%)",
                loc: 148194,
              },
              {
                name: "layers",
                color: "hsl(25, 70%, 50%)",
                loc: 67989,
              },
            ],
          },
          {
            name: "ppie",
            color: "hsl(163, 70%, 50%)",
            children: [
              {
                name: "chart",
                color: "hsl(341, 70%, 50%)",
                children: [
                  {
                    name: "pie",
                    color: "hsl(275, 70%, 50%)",
                    children: [
                      {
                        name: "outline",
                        color: "hsl(349, 70%, 50%)",
                        loc: 30488,
                      },
                      {
                        name: "slices",
                        color: "hsl(288, 70%, 50%)",
                        loc: 129509,
                      },
                      {
                        name: "bbox",
                        color: "hsl(44, 70%, 50%)",
                        loc: 37595,
                      },
                    ],
                  },
                  {
                    name: "donut",
                    color: "hsl(168, 70%, 50%)",
                    loc: 158908,
                  },
                  {
                    name: "gauge",
                    color: "hsl(269, 70%, 50%)",
                    loc: 92017,
                  },
                ],
              },
              {
                name: "legends",
                color: "hsl(208, 70%, 50%)",
                loc: 197631,
              },
            ],
          },
        ],
      },
      {
        name: "colors",
        color: "hsl(277, 70%, 50%)",
        children: [
          {
            name: "rgb",
            color: "hsl(77, 70%, 50%)",
            loc: 172029,
          },
          {
            name: "hsl",
            color: "hsl(24, 70%, 50%)",
            loc: 166998,
          },
        ],
      },
      {
        name: "utils",
        color: "hsl(108, 70%, 50%)",
        children: [
          {
            name: "randomize",
            color: "hsl(60, 70%, 50%)",
            loc: 84528,
          },
          {
            name: "resetClock",
            color: "hsl(96, 70%, 50%)",
            loc: 128196,
          },
          {
            name: "noop",
            color: "hsl(111, 70%, 50%)",
            loc: 11510,
          },
          {
            name: "tick",
            color: "hsl(145, 70%, 50%)",
            loc: 149415,
          },
          {
            name: "forceGC",
            color: "hsl(306, 70%, 50%)",
            loc: 57287,
          },
          {
            name: "stackTrace",
            color: "hsl(299, 70%, 50%)",
            loc: 2823,
          },
          {
            name: "dbg",
            color: "hsl(273, 70%, 50%)",
            loc: 126689,
          },
        ],
      },
      {
        name: "generators",
        color: "hsl(200, 70%, 50%)",
        children: [
          {
            name: "address",
            color: "hsl(60, 70%, 50%)",
            loc: 133623,
          },
          {
            name: "city",
            color: "hsl(196, 70%, 50%)",
            loc: 53174,
          },
          {
            name: "animal",
            color: "hsl(53, 70%, 50%)",
            loc: 53649,
          },
          {
            name: "movie",
            color: "hsl(79, 70%, 50%)",
            loc: 161421,
          },
          {
            name: "user",
            color: "hsl(207, 70%, 50%)",
            loc: 103038,
          },
        ],
      },
      {
        name: "set",
        color: "hsl(204, 70%, 50%)",
        children: [
          {
            name: "clone",
            color: "hsl(188, 70%, 50%)",
            loc: 190288,
          },
          {
            name: "intersect",
            color: "hsl(360, 70%, 50%)",
            loc: 129098,
          },
          {
            name: "merge",
            color: "hsl(107, 70%, 50%)",
            loc: 103238,
          },
          {
            name: "reverse",
            color: "hsl(242, 70%, 50%)",
            loc: 96545,
          },
          {
            name: "toArray",
            color: "hsl(267, 70%, 50%)",
            loc: 59471,
          },
          {
            name: "toObject",
            color: "hsl(88, 70%, 50%)",
            loc: 193025,
          },
          {
            name: "fromCSV",
            color: "hsl(50, 70%, 50%)",
            loc: 42354,
          },
          {
            name: "slice",
            color: "hsl(129, 70%, 50%)",
            loc: 59845,
          },
          {
            name: "append",
            color: "hsl(222, 70%, 50%)",
            loc: 154860,
          },
          {
            name: "prepend",
            color: "hsl(322, 70%, 50%)",
            loc: 6198,
          },
          {
            name: "shuffle",
            color: "hsl(163, 70%, 50%)",
            loc: 149937,
          },
          {
            name: "pick",
            color: "hsl(61, 70%, 50%)",
            loc: 142796,
          },
          {
            name: "plouc",
            color: "hsl(122, 70%, 50%)",
            loc: 106935,
          },
        ],
      },
      {
        name: "text",
        color: "hsl(145, 70%, 50%)",
        children: [
          {
            name: "trim",
            color: "hsl(224, 70%, 50%)",
            loc: 109572,
          },
          {
            name: "slugify",
            color: "hsl(80, 70%, 50%)",
            loc: 28961,
          },
          {
            name: "snakeCase",
            color: "hsl(237, 70%, 50%)",
            loc: 26162,
          },
          {
            name: "camelCase",
            color: "hsl(187, 70%, 50%)",
            loc: 136407,
          },
          {
            name: "repeat",
            color: "hsl(323, 70%, 50%)",
            loc: 147309,
          },
          {
            name: "padLeft",
            color: "hsl(141, 70%, 50%)",
            loc: 105507,
          },
          {
            name: "padRight",
            color: "hsl(100, 70%, 50%)",
            loc: 77351,
          },
          {
            name: "sanitize",
            color: "hsl(129, 70%, 50%)",
            loc: 160725,
          },
          {
            name: "ploucify",
            color: "hsl(32, 70%, 50%)",
            loc: 128411,
          },
        ],
      },
      {
        name: "misc",
        color: "hsl(199, 70%, 50%)",
        children: [
          {
            name: "greetings",
            color: "hsl(114, 70%, 50%)",
            children: [
              {
                name: "hey",
                color: "hsl(343, 70%, 50%)",
                loc: 59065,
              },
              {
                name: "HOWDY",
                color: "hsl(260, 70%, 50%)",
                loc: 35891,
              },
              {
                name: "aloha",
                color: "hsl(69, 70%, 50%)",
                loc: 169405,
              },
              {
                name: "AHOY",
                color: "hsl(305, 70%, 50%)",
                loc: 54487,
              },
            ],
          },
          {
            name: "other",
            color: "hsl(207, 70%, 50%)",
            loc: 194348,
          },
          {
            name: "path",
            color: "hsl(358, 70%, 50%)",
            children: [
              {
                name: "pathA",
                color: "hsl(359, 70%, 50%)",
                loc: 119166,
              },
              {
                name: "pathB",
                color: "hsl(74, 70%, 50%)",
                children: [
                  {
                    name: "pathB1",
                    color: "hsl(123, 70%, 50%)",
                    loc: 59575,
                  },
                  {
                    name: "pathB2",
                    color: "hsl(153, 70%, 50%)",
                    loc: 172244,
                  },
                  {
                    name: "pathB3",
                    color: "hsl(241, 70%, 50%)",
                    loc: 87536,
                  },
                  {
                    name: "pathB4",
                    color: "hsl(104, 70%, 50%)",
                    loc: 61942,
                  },
                ],
              },
              {
                name: "pathC",
                color: "hsl(311, 70%, 50%)",
                children: [
                  {
                    name: "pathC1",
                    color: "hsl(161, 70%, 50%)",
                    loc: 78491,
                  },
                  {
                    name: "pathC2",
                    color: "hsl(269, 70%, 50%)",
                    loc: 24160,
                  },
                  {
                    name: "pathC3",
                    color: "hsl(170, 70%, 50%)",
                    loc: 49817,
                  },
                  {
                    name: "pathC4",
                    color: "hsl(107, 70%, 50%)",
                    loc: 100694,
                  },
                  {
                    name: "pathC5",
                    color: "hsl(173, 70%, 50%)",
                    loc: 186165,
                  },
                  {
                    name: "pathC6",
                    color: "hsl(272, 70%, 50%)",
                    loc: 70504,
                  },
                  {
                    name: "pathC7",
                    color: "hsl(44, 70%, 50%)",
                    loc: 144804,
                  },
                  {
                    name: "pathC8",
                    color: "hsl(331, 70%, 50%)",
                    loc: 112172,
                  },
                  {
                    name: "pathC9",
                    color: "hsl(124, 70%, 50%)",
                    loc: 81026,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Peformance</CardTitle>
        <CardDescription>A detailed day record</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <MyResponsiveSunburst data={data} />
      </CardContent>
    </Card>
  );
};

export default General;
