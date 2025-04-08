const tourismData = {
  type: "FeatureCollection",
  features: [
    // ภาคเหนือ
    {
      type: "Feature",
      properties: {
        name: "ดอยอินทนนท์",
        province: "เชียงใหม่",
        region: "north",
        type: "ธรรมชาติ",
        description:
          "ยอดเขาที่สูงที่สุดในประเทศไทย เป็นส่วนหนึ่งของเทือกเขาหิมาลัย มีอากาศเย็นตลอดปีและมีความหลากหลายทางชีวภาพสูง",
        imageUrl:
          "https://image-tc.galaxy.tf/wijpeg-sxrfid5inslt46adwg0pwpho/intanon_standard.jpg?crop=112%2C0%2C1777%2C1333",
      },
      geometry: {
        type: "Point",
        coordinates: [98.4867, 18.5889],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "วัดพระธาตุดอยสุเทพ",
        province: "เชียงใหม่",
        region: "north",
        type: "วัฒนธรรม",
        description:
          "วัดที่ตั้งอยู่บนดอยสุเทพ เป็นวัดที่มีความสำคัญในเชียงใหม่ สร้างในปี พ.ศ. 1927 มีบันไดนาคทอดยาวขึ้นไปสู่วัด",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c1/Wat_Phra_That_Doi_Suthep_%28I%29.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [98.9215, 18.8046],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "อุทยานประวัติศาสตร์สุโขทัย",
        province: "สุโขทัย",
        region: "north",
        type: "ประวัติศาสตร์",
        description:
          "เมืองเก่าแห่งแรกของไทย มรดกโลกทางวัฒนธรรม มีซากโบราณสถานที่สำคัญมากมาย เช่น วัดมหาธาตุ วัดศรีชุม",
        imageUrl:
          "https://www.silpa-mag.com/wp-content/uploads/2018/03/%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B8%AA%E0%B8%B8%E0%B9%82%E0%B8%82%E0%B8%97%E0%B8%B1%E0%B8%A2.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [99.7037, 17.0127],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ภูชี้ฟ้า",
        province: "เชียงราย",
        region: "north",
        type: "ธรรมชาติ",
        description:
          "ยอดเขาสูงในอุทยานแห่งชาติภูชี้ฟ้า มีจุดชมวิวที่สามารถมองเห็นทะเลหมอกและพระอาทิตย์ขึ้นที่สวยงาม",
        imageUrl: "https://s.isanook.com/tr/0/ud/286/1430409/iio.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [100.4408, 19.8449],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "แพะเมืองผี",
        province: "แพร่",
        region: "north",
        type: "ธรรมชาติ",
        description:
          "ปรากฏการณ์ธรรมชาติที่เกิดจากการกัดเซาะของน้ำและลมเป็นเวลานาน ทำให้เกิดเป็นรูปทรงประหลาดคล้ายหินรูปร่างต่างๆ",
        imageUrl:
          "https://media.komchadluek.net/uploads/images/contents/w1024/2024/10/PrK0bTEZYJxKl982uV3g.webp?x-image-process=style/lg-webp",
      },
      geometry: {
        type: "Point",
        coordinates: [100.1683, 18.1683],
      },
    },

    // ภาคกลาง
    {
      type: "Feature",
      properties: {
        name: "วัดพระศรีรัตนศาสดาราม (วัดพระแก้ว)",
        province: "กรุงเทพมหานคร",
        region: "central",
        type: "วัฒนธรรม",
        description:
          "วัดที่ประดิษฐานพระแก้วมรกต พระพุทธรูปอันเป็นสมบัติล้ำค่าของชาติไทย ตั้งอยู่ในพระบรมมหาราชวัง",
        imageUrl:
          "https://img.kapook.com/u/2023/sutasinee/04/WatPhraKaew11.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [100.4926, 13.7516],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "อุทยานประวัติศาสตร์พระนครศรีอยุธยา",
        province: "พระนครศรีอยุธยา",
        region: "central",
        type: "ประวัติศาสตร์",
        description:
          "อดีตราชธานีของไทย เป็นมรดกโลกทางวัฒนธรรม มีซากโบราณสถานที่สำคัญมากมาย",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a2/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%8D%E0%B9%8C348.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5678, 14.3559],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ตลาดน้ำดำเนินสะดวก",
        province: "ราชบุรี",
        region: "central",
        type: "วัฒนธรรม",
        description:
          "ตลาดน้ำที่มีชื่อเสียงที่สุดในประเทศไทย เป็นแหล่งซื้อขายสินค้าทางน้ำที่มีมาแต่โบราณ",
        imageUrl:
          "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/05/IMG_8151-1200.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [99.962, 13.5259],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "พระนครคีรี (เขาวัง)",
        province: "เพชรบุรี",
        region: "central",
        type: "ประวัติศาสตร์",
        description:
          "พระราชวังฤดูร้อนสมัยรัชกาลที่ 4 ตั้งอยู่บนยอดเขาในเมืองเพชรบุรี มีอาคารสำคัญหลายหลัง เช่น พระที่นั่งเพชรภูมิไพโรจน์",
        imageUrl:
          "https://phetchaburi.prd.go.th/th/file/get/file/20240513d88bac7c1af589282c5d408b3e3214db082022.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [99.9406, 13.1121],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "สวนนงนุช",
        province: "ชลบุรี",
        region: "central",
        type: "ธรรมชาติ",
        description:
          "สวนพฤกษศาสตร์ขนาดใหญ่ที่รวบรวมพันธุ์ไม้นานาชนิดจากทั่วโลก และมีการจัดสวนในรูปแบบต่างๆ รวมทั้งมีการแสดงทางวัฒนธรรม",
        imageUrl:
          "https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGobS2EdYWAV7POpYmneSS3nLV2W3.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [100.9378, 12.7654],
      },
    },

    // ภาคอีสาน
    {
      type: "Feature",
      properties: {
        name: "อุทยานประวัติศาสตร์พิมาย",
        province: "นครราชสีมา",
        region: "northeast",
        type: "ประวัติศาสตร์",
        description:
          "ปราสาทหินทรายขนาดใหญ่ที่สุดในประเทศไทย สร้างในสมัยขอม เป็นเส้นทางเชื่อมโยงกับนครวัดในกัมพูชา",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/0c/Phimai_%28III%29.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [102.4945, 15.2214],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "อุทยานแห่งชาติภูเรือ",
        province: "เลย",
        region: "northeast",
        type: "ธรรมชาติ",
        description:
          "อุทยานแห่งชาติที่มีอากาศหนาวเย็นที่สุดในประเทศไทย มีจุดชมวิวที่สามารถมองเห็นทะเลหมอกและทิวทัศน์ที่สวยงาม",
        imageUrl:
          "https://www.opt-news.com/public/upload/userfiles/images/1735469543345.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [101.3474, 17.5014],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "สามพันโบก",
        province: "อุบลราชธานี",
        region: "northeast",
        type: "ธรรมชาติ",
        description:
          "แก่งหินขนาดใหญ่ในแม่น้ำโขง มีแอ่งน้ำมากกว่า 3,000 แอ่ง เกิดจากการกัดเซาะของน้ำในช่วงฤดูน้ำหลาก",
        imageUrl:
          "https://www.prd.go.th/th/file/get/file/2024081578e9dbf2904dde984d207a71a8cb6737131009.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [105.3964, 15.6847],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ปราสาทหินพนมรุ้ง",
        province: "บุรีรัมย์",
        region: "northeast",
        type: "ประวัติศาสตร์",
        description:
          "ปราสาทหินที่สร้างบนภูเขาไฟที่ดับแล้ว สร้างในสมัยขอม มีความพิเศษคือมีการออกแบบให้แสงแดดส่องผ่านประตู 15 บานพร้อมกันในวันสำคัญ",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/87/%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%9E%E0%B8%99%E0%B8%A1%E0%B8%A3%E0%B8%B8%E0%B9%89%E0%B8%87IDSC_0827.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [102.9417, 14.5314],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ผาชันสี่แคว",
        province: "เลย",
        region: "northeast",
        type: "ธรรมชาติ",
        description:
          "จุดชมวิวบนหน้าผาสูงที่มองเห็นลำน้ำสี่สายไหลมาบรรจบกัน ได้แก่ น้ำเหือง แม่น้ำโขง น้ำเหือง และลำน้ำห้วยสายหมี",
        imageUrl:
          "https://www.dasta.or.th/uploads/article/202107/1625564024_dbad7f386c3f32c9f385.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [101.7051, 17.8875],
      },
    },

    // ภาคใต้
    {
      type: "Feature",
      properties: {
        name: "เกาะพีพี",
        province: "กระบี่",
        region: "south",
        type: "ธรรมชาติ",
        description:
          "หมู่เกาะที่มีชื่อเสียงระดับโลก มีชายหาดที่สวยงาม น้ำทะเลใส และแนวปะการังที่อุดมสมบูรณ์",
        imageUrl:
          "https://www.krabipao.go.th/files/com_travel/2020-07_b6bbce1ec3c4e5b.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [98.7718, 7.7382],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "อุทยานแห่งชาติเขาสก",
        province: "สุราษฎร์ธานี",
        region: "south",
        type: "ธรรมชาติ",
        description:
          "ป่าดิบชื้นผืนใหญ่ที่มีความหลากหลายทางชีวภาพสูง มีทะเลสาบสวยงามและเป็นแหล่งที่อยู่อาศัยของสัตว์ป่าหายาก",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d2/1022_KhaoSokNationalPark_2.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [98.5322, 8.95],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "หาดป่าตอง",
        province: "ภูเก็ต",
        region: "south",
        type: "ธรรมชาติ",
        description:
          "ชายหาดที่มีชื่อเสียงที่สุดในภูเก็ต มีความยาวประมาณ 3 กิโลเมตร เป็นศูนย์กลางการท่องเที่ยวและบันเทิงยามค่ำคืน",
        imageUrl:
          "https://cbtthailand.dasta.or.th/upload-file-api/Resources/RelateAttraction/Images/RAT830076/2.jpeg",
      },
      geometry: {
        type: "Point",
        coordinates: [98.2945, 7.8979],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "เขาตะปู (เกาะตาปู)",
        province: "พังงา",
        region: "south",
        type: "ธรรมชาติ",
        description:
          "เกาะหินปูนขนาดเล็กในอ่าวพังงา มีลักษณะคล้ายตะปูขนาดใหญ่ มีชื่อเสียงจากการเป็นสถานที่ถ่ายทำภาพยนตร์เรื่อง James Bond: The Man with the Golden Gun",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/37/Isla_Tapu%2C_Phuket%2C_Tailandia%2C_2013-08-20%2C_DD_11.JPG",
      },
      geometry: {
        type: "Point",
        coordinates: [98.5022, 8.2762],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "เกาะลันตา",
        province: "กระบี่",
        region: "south",
        type: "ธรรมชาติ",
        description:
          "เกาะขนาดใหญ่ที่ยังคงความเป็นธรรมชาติ มีชายหาดที่สวยงาม เงียบสงบ และเป็นที่นิยมของนักท่องเที่ยวที่ต้องการหลีกหนีความวุ่นวาย",
        imageUrl:
          "https://th.seaeagletour.com/wp-content/uploads/2021/01/%E0%B9%89%E0%B8%99%E0%B8%99%E0%B8%99.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [99.0335, 7.5388],
      },
    },
  ],
};
