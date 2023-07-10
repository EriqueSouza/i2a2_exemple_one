var products = [
  {
    id: 1,
    name: "Echo Dot",
    price: 63.00,
    image: "echo_dot.jpg"
  },
  {
    id: 2,
    name: "Echo Show",
    price: 119.93,
    image: "echo_show.jpg"
  },
  {
    id: 3,
    name: "Monitor",
    price: 98.60,
    image: "monitor.jpg"
  },
  {
    id: 4,
    name: "Monitor Portatil",
    price: 182.96,
    image: "monitor_portatil.jpg"
  },
  {
    id: 5,
    name: "Xiaomi Pad",
    price: 320.21,
    image: "xiaomi_pad.jpg"
  },
  {
    id: 6,
    name: "Mini PC",
    price: 419.00,
    image: "mini_pc.jpg"
  },
  {
    id: 7,
    name: "Switch Ethernet",
    price: 15.24,
    image: "switch_ethernet.jpg"
  },
  {
    id: 8,
    name: "Router 4G",
    price: 152.37,
    image: "router_4g.jpg"
  },
  {
    id: 9,
    name: "Câmera WI-FI",
    price: 30.39,
    image: "camera_wifi.jpg"
  },
  {
    id: 10,
    name: "Repetidor WI-FI",
    price: 16.99,
    image: "repetidor_wifi.jpg"
  },
  // Adicione os outros produtos aqui
];

var productList = document.getElementById("productList");

products.forEach(function(product) {
  var li = document.createElement("li");
  li.innerHTML = "<img src='" + product.image + "'><br>" +
                 "<strong>ID:</strong> " + product.id + "<br>" +
                 "<strong>Nome:</strong> " + product.name + "<br>" +
                 "<strong>Preço Unitário:</strong> " + product.price;

  productList.appendChild(li);
});

