import React from 'react';
import LLMList from '../components/LLMList';

const llmData = [
  {
    name: "GPT-4",
    company: "OpenAI",
    releaseDate: "March 14, 2023",
    description: "GPT-4 is a large multimodal model capable of processing both image and text inputs and generating text outputs."
  },
  {
    name: "Claude 2",
    company: "Anthropic",
    releaseDate: "July 11, 2023",
    description: "Claude 2 is an AI assistant created by Anthropic to be helpful, harmless, and honest."
  },
  {
    name: "PaLM 2",
    company: "Google",
    releaseDate: "May 10, 2023",
    description: "PaLM 2 is a large language model developed by Google, designed to handle various language tasks."
  },
  {
    name: "BERT",
    company: "Google",
    releaseDate: "October 11, 2018",
    description: "BERT (Bidirectional Encoder Representations from Transformers) is designed to pre-train deep bidirectional representations from unlabeled text."
  },
  {
    name: "LLaMA",
    company: "Meta",
    releaseDate: "February 24, 2023",
    description: "LLaMA (Large Language Model Meta AI) is a foundational large language model designed to help researchers advance their work in this subfield of AI."
  },
  {
    name: "Falcon",
    company: "Technology Innovation Institute",
    releaseDate: "May 24, 2023",
    description: "Falcon is an open-source AI large language model, trained on a large amount of text data."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Large Language Models (LLMs)</h1>
        <LLMList llms={llmData} />
      </div>
    </div>
  );
};

export default Index;