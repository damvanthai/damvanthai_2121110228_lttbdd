
export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Bữa sáng",
	},
	{
		id: "02",
		category: "Bữa trưa",
	},
	{
		id: "03",
		category: "Bữa tối",
	},
	{
		id: "04",
		category: "Asian",
	},
	{
		id: "05",
		category: "Món Ý",
	},
	{
		id: "06",
		category: "Món tráng miệng",
	},
	{
		id: "07",
		category: "Món chay",
	},
	{
		id: "08",
		category: "Hải sản",
	},
];

export const recipeList = [
	{
		id: "01",
		name: "Cá ngừ Tartare",
		image: require("../assets/images/tuna.png"),
		rating: "4.2",
		ingredients: ["Cá Ngừ Tươi", "Nước cốt chanh", "Hành tím", "Trái bơ"],
		time: "40 phút",
		difficulty: "Trung bình",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"Một món ăn thú vị và sảng khoái với cá ngừ tươi trộn với nước cốt chanh và vị giòn của hành tím và bơ.",
		steps: [
			"Cắt cá ngừ tươi thành khối nhỏ.",
			"Băm nhỏ hành đỏ và bơ.",
			"Trộn cá ngừ, hành tím và bơ vào tô.",
			"Rưới nước cốt chanh lên hỗn hợp và trộn nhẹ nhàng.",
			"Phục vụ ướp lạnh và thưởng thức!",
		],
	},
	{
		id: "02",
		name: "Mì nướng kiểu Ý",
		image: require("../assets/images/lasgana.png"),
		rating: "3.6",
		ingredients: [
			"Mì Lasagna",
			"Thịt bò xay",
			"Phô mai ri-cô-ta",
			"Nước sốt cà chua",
		],
		time: "40 phút",
		difficulty: "Trung bình",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"Một món ăn cổ điển của Ý với các lớp mì lasagna, thịt bò xay đầy hương vị, phô mai ricotta đậm đà và nước sốt cà chua thơm.",
		steps: [
			"Nấu mì lasagna theo hướng dẫn trên bao bì.",
			"Nướng thịt bò xay trong chảo và nêm gia vị.",
			"Xếp các lớp mì lasagna, thịt bò, phô mai ricotta và sốt cà chua vào đĩa nướng.",
			"Lặp lại các lớp và nướng trong lò cho đến khi sủi bọt và vàng.",
			"Hãy để nguội một chút trước khi dùng.",
		],
	},
	{
		id: "03",
		name: "Hot Dog",
		image: require("../assets/images/hotdog.png"),
		rating: "4.6",
		ingredients: ["Bánh xúc xích", "Frankfurters", "Sốt cà chua", "Mù tạt"],
		time: "40 phút",
		difficulty: "Trung bình",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
		"Món bánh xúc xích được yêu thích cổ điển của người Mỹ với nhân xúc xích ngon ngọt, rưới sốt cà chua và mù tạt để tạo nên sự cân bằng hoàn hảo giữa các hương vị.",
		steps: [
			"Nướng hoặc hâm nóng xúc xích cho đến khi chín hẳn.",
			"Đặt xúc xích vào bánh mì xúc xích.",
			"Bóp nước sốt cà chua và mù tạt lên trên xúc xích.",
			"Phục vụ các món bạn yêu thích và thưởng thức!",
		],
		
	},
	{
		id: "04",
		name: "Manchurian",
		image: require("../assets/images/manchurian.png"),
		rating: "3.6",
		ingredients: ["Súp lơ", "Nước tương", "Gừng", "Tỏi"],
		time: "30 phút",
		difficulty: "Dễ",
		calories: "350 cal",
		color: "#d35400",
		description:
		"Món ăn Ấn-Trung phổ biến có những miếng súp lơ giòn được trộn trong nước sốt thơm ngon làm từ nước tương, gừng và tỏi.",
		steps: [
			"Cắt súp lơ thành những bông hoa và chần chúng.",
			"Chuẩn bị nước sốt bằng cách trộn nước tương, gừng và tỏi.",
			"Chiên ngập dầu hoặc chiên nông súp lơ cho đến khi giòn.",
			"Cho súp lơ đã chiên vào nước sốt cho đến khi ngấm đều.",
			"Trang trí với hành lá xắt nhỏ và dùng nóng.",
		],
	},
	{
		id: "05",
		name: "Gà",
		image: require("../assets/images/chicken.png"),
		rating: "2.2",
		ingredients: ["Ức gà", "Muối", "Tiêu đen", "Dầu ô liu"],
		time: "45 phút",
		difficulty: "Trung bình",
		calories: "450 cal",
		color: "#8d4004",
		description:
		"Một món gà ngon được nêm với hỗn hợp muối và hạt tiêu đen, sau đó nấu chín tới mức hoàn hảo với một chút dầu ô liu.",
		steps: [
			"Làm nóng lò trước ở nhiệt độ quy định.",
			"Ướp ức gà với muối và tiêu đen.",
			"Đun nóng dầu ô liu trong chảo trên lửa vừa cao.",
			"Áp ức gà hai mặt cho đến khi có màu vàng nâu.",
			"Chuyển gà vào lò nướng và nướng cho đến khi chín.",
			"Dùng nóng và thưởng thức món gà thơm ngon của bạn!",
		],
	},
	{
		id: "06",
		name: "Bánh ngọt",
		image: require("../assets/images/cupcakes.png"),
		rating: "5.0",
		ingredients: ["Bột", "Đường", "Trứng", "Bơ"],
		time: "60 phút",
		difficulty: "Trung bình",
		calories: "200 cal",
		description:
		"Những chiếc bánh cupcake thơm ngon được làm bằng sự kết hợp hoàn hảo giữa bột mì, đường, trứng và bơ, hoàn hảo cho mọi dịp.",
		steps: [
			"Làm nóng lò trước ở nhiệt độ quy định.",
			"Chuẩn bị bột bánh nướng nhỏ bằng cách trộn các nguyên liệu lại với nhau.",
			"Dùng giấy lót lót bánh nướng nhỏ lót khuôn bánh muffin.",
			"Đổ bột vào từng lớp lót và nướng trong lò.",
			"Để bánh nướng nguội, sau đó phủ kem và trang trí theo ý muốn.",
			"Thưởng thức những món ngọt ngào này và cảm nhận hương vị!",
		],
	},
	{
		id: "07",
		name: "Cà ri",
		image: require("../assets/images/curry.png"),
		rating: "4.8",
		ingredients: ["Thịt", "Bột cà ri", "Sữa dừa", "Gia vị"],
		time: "55 Phút",
		difficulty: "Khó",
		calories: "550 cal",
		color: "#d35400",

		description:
		"Món cà ri đậm đà và thơm gồm những miếng thịt mềm được nấu trong hỗn hợp đầy hương vị của bột cà ri, nước cốt dừa và gia vị.",
		steps: [
			"Ướp thịt với gia vị và để yên một lúc.",
			"Đun nóng dầu trong nồi lớn và xào thịt đã ướp cho đến khi chín vàng.",
			"Thêm bột cà ri và khuấy đều cho thịt.",
			"Đổ nước cốt dừa vào và đun nhỏ lửa.",
			"Đậy nắp và để cà ri sôi cho đến khi thịt mềm và hương vị hòa quyện.",
			"Dùng cà ri với cơm hoặc bánh mì và thưởng thức hương vị thơm ngon!",
		],
	},
	{
		id: "08",
		name: "Mì Ramen",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		ingredients: ["Mì Ramen", "Nước Tương", "Trứng", "Rau"],
		time: "35 phút",
		difficulty: "Dễ",
		calories: "400 cal",
		color: "#f96163",
		description:
		"Một tô mì ramen thơm ngon có sợi mì thơm ngon, nước dùng thơm ngon làm từ nước tương, rau mềm và trứng luộc hoàn hảo.",
		steps: [
			"Luộc mì ramen theo hướng dẫn trên bao bì.",
			"Trong nồi, đun sôi nước và thêm nước tương vào nước dùng.",
			"Thêm rau cắt nhỏ và nấu cho đến khi mềm.",
			"Luộc trứng đến độ chín mà bạn mong muốn, sau đó bóc vỏ và cắt lát.",
			"Gắp các bát ramen bằng cách đặt mì đã nấu chín, rau và các lát trứng.",
			"Múc nước dùng nóng lên các nguyên liệu và sẵn sàng thưởng thức món ramen tự làm của bạn!",
		],
	},
];
