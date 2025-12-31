import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"
          alt="Charity Background"
          className="w-full h-full object-cover"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black to-black/20"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center lg:text-left">
        <div className="max-w-3xl">
          <div className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4 animate-bounce">
            To all we are love
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Lan Tỏa Tình Thương <br />
            <span className="text-red-300">Kiến Tạo Tương Lai</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
            Quỹ Bông Hồng Nhỏ cam kết đồng hành cùng trẻ em nghèo và người yếu
            thế, mang lại cơ hội giáo dục và chăm sóc sức khỏe tốt hơn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#donate"
              className="bg-primary hover:bg-red-800 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition transform hover:scale-105 text-center"
            >
              Quyên Góp Ngay
            </Link>
            <Link
              href="#vision"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3.5 px-8 rounded-full shadow-lg transition text-center"
            >
              Tìm Hiểu Thêm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
