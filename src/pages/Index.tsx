import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Zap, Camera, Battery, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 pb-8">
        <div className="max-w-md mx-auto text-center">
          <Badge className="mb-4 bg-destructive text-destructive-foreground">
            限时特惠
          </Badge>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            全新旗舰手机
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            超越想象的科技体验
          </p>
          <div className="relative mx-auto w-48 h-80 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-card border rounded-3xl p-4 h-full flex items-center justify-center shadow-lg">
              <Smartphone className="w-24 h-24 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-card rounded-2xl p-6 shadow-lg border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground line-through">原价 ¥6999</span>
              <Badge variant="destructive">省¥2000</Badge>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">¥4999</div>
            <p className="text-sm text-muted-foreground">24期免息分期</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">核心亮点</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-primary/20">
              <CardContent className="p-4 text-center">
                <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">AI摄影</h3>
                <p className="text-sm text-muted-foreground">5000万像素三摄</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">闪充技术</h3>
                <p className="text-sm text-muted-foreground">100W超级快充</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-4 text-center">
                <Battery className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">长续航</h3>
                <p className="text-sm text-muted-foreground">5000mAh大电池</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-4 text-center">
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">旗舰芯片</h3>
                <p className="text-sm text-muted-foreground">顶级处理器</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-4 py-8 bg-muted/30">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">用户好评</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-2">"拍照效果真的很棒，电池续航也很给力！"</p>
                <p className="text-xs text-muted-foreground">- 张先生</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-2">"运行流畅，性价比超高，推荐购买！"</p>
                <p className="text-xs text-muted-foreground">- 李女士</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground text-center">
            <h3 className="text-lg font-bold mb-2">限时抢购</h3>
            <p className="text-sm mb-4 opacity-90">仅限今日，数量有限</p>
            <Button size="lg" variant="secondary" className="w-full mb-3">
              立即购买
            </Button>
            <Button size="lg" variant="outline" className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              加入购物车
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 text-center text-sm text-muted-foreground">
        <p>正品保证 | 全国联保 | 30天无理由退换</p>
      </footer>
    </div>
  );
};

export default Index;
