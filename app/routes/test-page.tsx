import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Test Page | Crustyverr" }];
};

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#FDF6E3" }}>
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold" style={{ color: "#2C1A0E" }}>
          Hello World
        </h1>
        <p className="mt-4 text-base" style={{ color: "#6B5744" }}>
          test page
        </p>
      </div>
    </div>
  );
}
