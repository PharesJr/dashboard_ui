"use client";

import React from "react";

import { ResponsiveBar } from '@nivo/bar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; 

const MyResponsiveBar = ({data} : {data: any}) => (
  <ResponsiveBar
      data={data}
      keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut'
      ]}
      indexBy="country"
      margin={{ top: 20, right: 130, bottom: 20, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'paired' }}
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'fries'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'sandwich'
              },
              id: 'lines'
          }
      ]}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  1.6
              ]
          ]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  1.6
              ]
          ]
      }}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
  />
)

const Line = () => {
  const data = [
    {
      "country": "AD",
      "hot dog": 99,
      "hot dogColor": "hsl(201, 70%, 50%)",
      "burger": 148,
      "burgerColor": "hsl(152, 70%, 50%)",
      "sandwich": 123,
      "sandwichColor": "hsl(175, 70%, 50%)",
      "kebab": 11,
      "kebabColor": "hsl(120, 70%, 50%)",
      "fries": 129,
      "friesColor": "hsl(264, 70%, 50%)",
      "donut": 195,
      "donutColor": "hsl(230, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 48,
      "hot dogColor": "hsl(273, 70%, 50%)",
      "burger": 168,
      "burgerColor": "hsl(192, 70%, 50%)",
      "sandwich": 144,
      "sandwichColor": "hsl(347, 70%, 50%)",
      "kebab": 198,
      "kebabColor": "hsl(53, 70%, 50%)",
      "fries": 30,
      "friesColor": "hsl(154, 70%, 50%)",
      "donut": 76,
      "donutColor": "hsl(141, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 27,
      "hot dogColor": "hsl(239, 70%, 50%)",
      "burger": 127,
      "burgerColor": "hsl(158, 70%, 50%)",
      "sandwich": 108,
      "sandwichColor": "hsl(196, 70%, 50%)",
      "kebab": 77,
      "kebabColor": "hsl(97, 70%, 50%)",
      "fries": 137,
      "friesColor": "hsl(272, 70%, 50%)",
      "donut": 142,
      "donutColor": "hsl(268, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 82,
      "hot dogColor": "hsl(348, 70%, 50%)",
      "burger": 15,
      "burgerColor": "hsl(153, 70%, 50%)",
      "sandwich": 118,
      "sandwichColor": "hsl(84, 70%, 50%)",
      "kebab": 89,
      "kebabColor": "hsl(143, 70%, 50%)",
      "fries": 121,
      "friesColor": "hsl(156, 70%, 50%)",
      "donut": 156,
      "donutColor": "hsl(294, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 40,
      "hot dogColor": "hsl(348, 70%, 50%)",
      "burger": 168,
      "burgerColor": "hsl(239, 70%, 50%)",
      "sandwich": 23,
      "sandwichColor": "hsl(208, 70%, 50%)",
      "kebab": 149,
      "kebabColor": "hsl(38, 70%, 50%)",
      "fries": 165,
      "friesColor": "hsl(173, 70%, 50%)",
      "donut": 166,
      "donutColor": "hsl(148, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 48,
      "hot dogColor": "hsl(120, 70%, 50%)",
      "burger": 11,
      "burgerColor": "hsl(65, 70%, 50%)",
      "sandwich": 109,
      "sandwichColor": "hsl(250, 70%, 50%)",
      "kebab": 46,
      "kebabColor": "hsl(115, 70%, 50%)",
      "fries": 64,
      "friesColor": "hsl(157, 70%, 50%)",
      "donut": 136,
      "donutColor": "hsl(232, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 80,
      "hot dogColor": "hsl(55, 70%, 50%)",
      "burger": 147,
      "burgerColor": "hsl(51, 70%, 50%)",
      "sandwich": 123,
      "sandwichColor": "hsl(143, 70%, 50%)",
      "kebab": 119,
      "kebabColor": "hsl(100, 70%, 50%)",
      "fries": 126,
      "friesColor": "hsl(43, 70%, 50%)",
      "donut": 43,
      "donutColor": "hsl(310, 70%, 50%)"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Peformance</CardTitle>
        <CardDescription>A detailed day record</CardDescription>
      </CardHeader>
      <CardContent className="h-[400px] flex items-center w-full">
        <MyResponsiveBar data={data} />
      </CardContent>
    </Card>
  );
};

export default Line;
