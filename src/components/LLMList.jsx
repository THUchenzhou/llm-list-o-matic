import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LLMList = ({ llms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {llms.map((llm, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{llm.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">Company: {llm.company}</p>
            <p className="text-sm text-gray-600 mb-2">Release Date: {llm.releaseDate}</p>
            <p className="text-sm">{llm.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LLMList;