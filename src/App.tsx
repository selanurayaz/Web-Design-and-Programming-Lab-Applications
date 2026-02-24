import "./App.css";

function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="header">
  <h1>Web Tasarım ve Programlama Laboratuvar Uygulaması</h1>
  <p className="subtitle">Selanur Ayaz</p>

        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">

        {/* HAKKIMDA */}
        <section id="hakkimda" className="section">
          <h2>Hakkımda</h2>

          <figure className="profile">
            <img
              src="/profil.jpg"
              alt="Selanur Ayaz'in vesikalik fotografi"
            />
            <figcaption>Selanur Ayaz</figcaption>
          </figure>

          <p>
            Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim.
            Yazılım geliştirme süreçlerine ve problem çözmeye büyük ilgi
            duyuyorum. Özellikle Java, C, C++ ve Python alanlarında daha
            güçlü bir altyapıya sahibim ve full-stack geliştirme alanında
            kendimi sürekli geliştirmeyi hedefliyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul className="tech-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
          </ul>
        </section>

        {/* PROJELER */}
        <section id="projeler" className="section">
          <h2>Projelerim</h2>

          <article className="project-card">
            <h3>EduLink</h3>
            <img
              src="/edulink.jpg"
              alt="EduLink egitim platformu ana sayfa ekran goruntusu"
            />
            <p>
              EduLink, öğrenciler ile eğitmenleri bir araya getiren
              dijital bir eğitim platformudur. Kullanıcı dostu arayüzü
              sayesinde ders içerikleri ve iletişim süreçleri kolayca
              yönetilebilir.
            </p>
            <p><strong>Teknolojiler:</strong> React, Node.js, JavaScript</p>
          </article>

          <article className="project-card">
            <h3>EVSE Projesi</h3>
            <img
              src="/evse.jpg"
              alt="EVSE elektrikli arac sarj istasyonu arayuz ekran goruntusu"
            />
            <p>
              EVSE projesi, elektrikli araç şarj istasyonlarının yönetimini
              ve izlenmesini sağlayan bir sistemdir. Gerçek zamanlı veri
              takibi ve kullanıcı kontrol paneli içerir.
            </p>
            <p><strong>Teknolojiler:</strong> Java, Python, React</p>
          </article>

        </section>

        {/* İLETİŞİM */}
        <section id="iletisim" className="section">
          <h2>İletişim</h2>

          <form action="#" method="POST" noValidate className="contact-form">
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>

          <div className="social">
            <p>Email: selanuraya0@gmail.com</p>
            <p>GitHub: github.com/selanurayaz</p>
            <p>LinkedIn: linkedin.com/in/selanurayaz</p>
          </div>

        </section>

      </main>

      <footer className="footer">
        <p>© 2025 Selanur Ayaz. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;