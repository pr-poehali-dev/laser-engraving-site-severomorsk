import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    material: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", material: "", message: "" });
  };

  const services = [
    {
      icon: "Box",
      title: "Гравировка по металлу",
      description: "Высокоточная лазерная гравировка на стали, алюминии, меди и других металлах"
    },
    {
      icon: "Shapes",
      title: "Работа с пластиком",
      description: "Нанесение изображений и текста на акрил, ПВХ и другие виды пластика"
    },
    {
      icon: "Mountain",
      title: "Гравировка по камню",
      description: "Художественная гравировка на граните, мраморе и натуральном камне"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/d967c0b1-ab15-4488-961a-97308310d1d7/files/9a12f439-7c3c-4d35-968c-f0d6db59842d.jpg",
      title: "Гравировка на металле"
    },
    {
      image: "https://cdn.poehali.dev/projects/d967c0b1-ab15-4488-961a-97308310d1d7/files/7eb8ebe9-d346-40ec-8581-9b4a885ed96f.jpg",
      title: "Работа с пластиком"
    },
    {
      image: "https://cdn.poehali.dev/projects/d967c0b1-ab15-4488-961a-97308310d1d7/files/6361fb42-9d06-48ae-bd48-fae6d54bf6ba.jpg",
      title: "Гравировка на камне"
    }
  ];

  const prices = [
    { name: "Металл", price: "от 500₽", time: "1-2 дня" },
    { name: "Пластик", price: "от 300₽", time: "1 день" },
    { name: "Камень", price: "от 800₽", time: "2-3 дня" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LaserGraver
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#order" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Лазерная гравировка
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Профессиональная гравировка по металлу, пластику и камню в Североморске
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#order">Заказать</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#portfolio">Портфолио</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">
            Наши работы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-lg font-semibold p-6">{item.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">
            Цены
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {prices.map((item, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold font-heading mb-4">{item.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-2">{item.price}</p>
                  <p className="text-muted-foreground flex items-center justify-center gap-2">
                    <Icon name="Clock" size={16} />
                    {item.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            * Итоговая цена зависит от сложности работы и размера
          </p>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">
            О нас
          </h2>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg">
                <p>
                  Мы — профессиональная мастерская лазерной гравировки в Североморске с современным оборудованием и опытными специалистами.
                </p>
                <p>
                  Наши технологии позволяют наносить высокоточные изображения, логотипы, тексты и узоры на различные материалы: металл, пластик, камень.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-muted-foreground">Выполненных заказов</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">5 лет</div>
                    <p className="text-muted-foreground">На рынке</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-muted-foreground">Гарантия качества</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold font-heading text-center mb-4">
            Заказать гравировку
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-md bg-background border-2 border-input focus:border-primary outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-md bg-background border-2 border-input focus:border-primary outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Материал</label>
                  <select
                    required
                    value={formData.material}
                    onChange={(e) => setFormData({...formData, material: e.target.value})}
                    className="w-full px-4 py-3 rounded-md bg-background border-2 border-input focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Выберите материал</option>
                    <option value="metal">Металл</option>
                    <option value="plastic">Пластик</option>
                    <option value="stone">Камень</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Описание заказа</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-md bg-background border-2 border-input focus:border-primary outline-none transition-colors min-h-32"
                    placeholder="Расскажите, что вы хотите нанести на материал..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <p>г. Североморск, ул. Примерная, 1</p>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <p>+7 (999) 123-45-67</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <p>info@lasergraver.ru</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 LaserGraver. Все права защищены.</p>
          <p className="mt-2">Лазерная гравировка в Североморске</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
