# Gün Projesi: DarkMode localStorage kaydı

Bir yatırım firması için yapılan bir uygulamada, kullanıcı deneyimini artırmak için -son zamanların popüler özelliği- darkMode'u eklemek istiyorlar.

UI tarafı ve css'leri projeye eklenmiş durumda.Yapılan ayarın kayıtlı kalması için backend geliştirilmesi yapılıyor. Ama, client tarafında da localstorage ile ayarların browser'da saklanması bekleniyor.

öncelikle, projeyi test ederken darkMode switch'inin düzgün çalışmadığını fark ettin. Bu switch App.jsx'deki `geceModu` state'ini güncelliyor ama App class'ı eklenmiş div'e `dark-mode` classını ekleyip çıkarmıyor.
[ ] Bunu düzelterek başlayabilirsin.

Proje planında görevler paylaştırıldı ve sana şu görevler düşüyor:
[ ] src klasörünün altında `hooks` adıyla bir klasör oluşturmak,
[ ] içinde `useLocalStorage.jsx` dosya ismiyle bir custom hook oluşturmak. Bu hook;
(1) 2 argüman almalı: key ve başlangıç değeri.
(2) eğer localStorage'da bu key'e karşılık kayıtlı bir değer varsa onu, yoksa başlangıç değerini kullanmalı.
(3) localStorage'da tutulan değeri ve onu güncelleyecek bir metodu dönmeli.
[ ] hooks klasörü içinde `useDarkMode.jsx` dosya ismi ile custom hook oluşturmak.
(1) Bu hook, useState gibi çalışmalı ve darkMode ayarını useLocalStorage hook'unu kullanarak localStorage üzerinden yönetmeli.

## Önemli Notlar

- Proje dizinindeki `user.json` dosyasını bulun ve `user_id` alanını NextGen proje ekranında görünen kendi `user_id` değeriniz ile güncelleyin.
- Geliştirme sırasında testleri izlemek için `npm test` komutunu kullanın.
- Testleri çalıştırıp skoru NextGen'e kaydetmek için `npm run sendresults` komutunu kullanın.
