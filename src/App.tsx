import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// 动态计算基准路径（适配 /projects/[项目ID]/dist/ 结构）
const getBasename = () => {
  const pathname = window.location.pathname;
  console.log("当前路径:", pathname); // 打印完整路径用于调试

  // 优化正则：支持路径末尾是否带斜杠，且兼容项目ID中的特殊字符
  // 匹配 /projects/[任意字符]/dist 或 /projects/[任意字符]/dist/
  const match = pathname.match(/\/projects\/[^/]+\/dist\/?/);
  
  if (match) {
    let basename = match[0];
    // 确保 basename 以斜杠开头，且不以斜杠结尾（React Router 要求）
    if (basename.endsWith("/")) {
      basename = basename.slice(0, -1);
    }
    console.log("计算出的 basename:", basename); // 打印最终 basename
    return basename;
  }

  // 兜底：开发环境或路径不匹配时使用根路径
  console.log("未匹配到路径，使用默认 basename: /");
  return "/";
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
