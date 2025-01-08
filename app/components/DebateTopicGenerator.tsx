"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

// 仮のテーマリスト（実際のアプリケーションではAPIやデータベースから取得します）
const topics = [
  "人工知能は人間の仕事を奪うか",
  "死刑制度は廃止すべきか",
  "義務教育で制服は必要か",
  "ベーシックインカムは実現可能か",
  "宇宙開発は人類にとって重要か",
  "動物実験は倫理的に正当化できるか",
  "原子力発電は持続可能なエネルギー源か",
  "遺伝子組み換え食品は安全か",
  "インターネットの匿名性は保護されるべきか",
  "学校でのスマートフォン使用を禁止すべきか",
  "商業的な成功を目的とする映画の是非",
];

export default function DebateTopicGenerator() {
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const generateTopic = () => {
    let newTopic;
    do {
      newTopic = topics[Math.floor(Math.random() * topics.length)];
    } while (newTopic === currentTopic);

    setCurrentTopic(newTopic);
  };

  const startDebate = async () => {
    if (!currentTopic) return;
    setIsLoading(true);
    // 画面遷移をシミュレートするための遅延
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/debate/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            ディベートテーマ
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          {currentTopic && (
            <Card className="mb-4">
              <CardContent className="pt-6">
                <p className="text-2xl font-bold text-center">{currentTopic}</p>
              </CardContent>
            </Card>
          )}
          <Button onClick={generateTopic} className="w-fit mb-4">
            新しいテーマを生成
          </Button>
          <Button
            onClick={startDebate}
            className="w-fit mb-4"
            disabled={!currentTopic || isLoading}
          >
            {isLoading ? <p>ディベートを準備中...</p> : <p>ディベートを開始</p>}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
