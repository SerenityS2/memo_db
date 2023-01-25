'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "caaad9480d50ae9be398aabaa19618ab",
"assets/assets/images/border/1.png": "e51b7cce4a4440b1b6ea95626d0ddd20",
"assets/assets/images/border/2.png": "3aa06a9a85ab51476dcdc35cd746698f",
"assets/assets/images/border/8.png": "0214e1c67aaf0187dc0bad6d1efdd1f2",
"assets/assets/images/chara_icon/CHR_000001_00_l.png": "d7723ceda0f44e33e88c8ad119bb53df",
"assets/assets/images/chara_icon/CHR_000001_00_m.png": "375d6bb57c7a752902e71a8f6c64c4a9",
"assets/assets/images/chara_icon/CHR_000001_00_s.png": "401b1976604a066561b1f24d7b399989",
"assets/assets/images/chara_icon/CHR_000001_00_w.png": "fa0e4676863a1fa5398bc6606d4953eb",
"assets/assets/images/chara_icon/CHR_000002_00_l.png": "3f91b759126eeed31721c6cc056c459b",
"assets/assets/images/chara_icon/CHR_000002_00_m.png": "278dc2592c1506232788ed7a2866de05",
"assets/assets/images/chara_icon/CHR_000002_00_s.png": "d1c41d2ddb197345c4b4f7e7dc934d58",
"assets/assets/images/chara_icon/CHR_000002_00_w.png": "3f068ca45335e59ebd40dc518eec1d1b",
"assets/assets/images/chara_icon/CHR_000003_00_l.png": "72339eb90563a046b6a1892b6dc5bd60",
"assets/assets/images/chara_icon/CHR_000003_00_m.png": "0818c2c3634917deaf4dbf8ad9b5ff70",
"assets/assets/images/chara_icon/CHR_000003_00_s.png": "d5bfeb3378f6f51811c9bf9e5feaf07e",
"assets/assets/images/chara_icon/CHR_000003_00_w.png": "5e9687a2199389731169406b456acf1d",
"assets/assets/images/chara_icon/CHR_000004_00_l.png": "b56883773046bb102fbc708007d4f9ca",
"assets/assets/images/chara_icon/CHR_000004_00_m.png": "dcab4a9ad33725e4fed158b6c0b338aa",
"assets/assets/images/chara_icon/CHR_000004_00_s.png": "c5b1972784d7bbb2be1d3479a5682e34",
"assets/assets/images/chara_icon/CHR_000004_00_w.png": "a7e1183941ca2a9281da6eb957b439fa",
"assets/assets/images/chara_icon/CHR_000005_00_l.png": "c7d57f7d7419daf208875d34c74d578d",
"assets/assets/images/chara_icon/CHR_000005_00_m.png": "9d0e43029e01e1bdd5ea7fbd0479b41a",
"assets/assets/images/chara_icon/CHR_000005_00_s.png": "484783a2bdf41a26d27cc9c886f6f953",
"assets/assets/images/chara_icon/CHR_000005_00_w.png": "16abf8fc89f1428b04887c074827d691",
"assets/assets/images/chara_icon/CHR_000006_00_l.png": "678bd3535841eb44f02447506043aa67",
"assets/assets/images/chara_icon/CHR_000006_00_m.png": "43546f83fb6da6d2f80b6e767ce8d06d",
"assets/assets/images/chara_icon/CHR_000006_00_s.png": "cef8a0b62f35ef35af3c87593e1c901d",
"assets/assets/images/chara_icon/CHR_000006_00_w.png": "5a75abb08bedaa1848818fa1d41dfc09",
"assets/assets/images/chara_icon/CHR_000007_00_l.png": "1ed559864799e47eff47b4b872be8233",
"assets/assets/images/chara_icon/CHR_000007_00_m.png": "33c937e2e244c7e8761a5b68b142f085",
"assets/assets/images/chara_icon/CHR_000007_00_s.png": "041df12f486a2740e833b21a223a3b73",
"assets/assets/images/chara_icon/CHR_000007_00_w.png": "d901109493ba9f8957ddec11e23e37aa",
"assets/assets/images/chara_icon/CHR_000008_00_l.png": "67fa2d18b96d73278d67717a53615799",
"assets/assets/images/chara_icon/CHR_000008_00_m.png": "88ea06d7db8fb0be56e814ed3a6d1a15",
"assets/assets/images/chara_icon/CHR_000008_00_s.png": "a8cd3585f8c60707194193fd84b15f56",
"assets/assets/images/chara_icon/CHR_000008_00_w.png": "42bcfb0a3034c25248d431499b1d47f4",
"assets/assets/images/chara_icon/CHR_000009_00_l.png": "8d5a13954ad0d576c83071e79f92b63c",
"assets/assets/images/chara_icon/CHR_000009_00_m.png": "ad942d59c92b60caa8fd5f4a76605163",
"assets/assets/images/chara_icon/CHR_000009_00_s.png": "c3ec282e25ab10001b19a001404516a5",
"assets/assets/images/chara_icon/CHR_000009_00_w.png": "a1a21e6f539c0f6beaa8eb43116d1771",
"assets/assets/images/chara_icon/CHR_000010_00_l.png": "e9bdfa6e82eece4c97ff680add23504b",
"assets/assets/images/chara_icon/CHR_000010_00_m.png": "375edd1a818552929dfa80a1e4f54481",
"assets/assets/images/chara_icon/CHR_000010_00_s.png": "d465df321d55a9d6299c7d7a33d4bf3d",
"assets/assets/images/chara_icon/CHR_000010_00_w.png": "1ce285a300fa79f8ed5892839109aabd",
"assets/assets/images/chara_icon/CHR_000011_00_l.png": "1dd0fa68417d43cec668fd27b0dbe46e",
"assets/assets/images/chara_icon/CHR_000011_00_m.png": "08352abe7d7b7bd3be9fc28202145ea5",
"assets/assets/images/chara_icon/CHR_000011_00_s.png": "3a1bf4368ff41f942a5c39abd3b6101f",
"assets/assets/images/chara_icon/CHR_000011_00_w.png": "002e98dc4dfe9b92fc49a63e5ceb40e8",
"assets/assets/images/chara_icon/CHR_000012_00_l.png": "02f8666def714d102cdcdfa9cc977fb3",
"assets/assets/images/chara_icon/CHR_000012_00_m.png": "666cdf6fe977c0938dbb786077cd5e5b",
"assets/assets/images/chara_icon/CHR_000012_00_s.png": "1c6559fb60cbb60a96fb6eb84f28f3b6",
"assets/assets/images/chara_icon/CHR_000012_00_w.png": "e91dd062db6518427b843fd9e5de8df3",
"assets/assets/images/chara_icon/CHR_000013_00_l.png": "7a9c6db5bd11febe2f9b18a9c1ea9a79",
"assets/assets/images/chara_icon/CHR_000013_00_m.png": "30273c78a9502b04386e5c6e10ff582e",
"assets/assets/images/chara_icon/CHR_000013_00_s.png": "88fe46a311fbfc85deab58563a5b8d41",
"assets/assets/images/chara_icon/CHR_000013_00_w.png": "916f6977c71cd25ce1f3e4385e4c4958",
"assets/assets/images/chara_icon/CHR_000014_00_l.png": "c748c35ea55eb14fa069221332fee947",
"assets/assets/images/chara_icon/CHR_000014_00_m.png": "1bd7f1d88207f02c2c191aca41ab76b1",
"assets/assets/images/chara_icon/CHR_000014_00_s.png": "da5d7b91fb8e2f921942dbdc6ff26164",
"assets/assets/images/chara_icon/CHR_000014_00_w.png": "08494ad1401fc47153c8b01cf2c399db",
"assets/assets/images/chara_icon/CHR_000015_00_l.png": "b602c97173fb73ff835e6115b327aa1a",
"assets/assets/images/chara_icon/CHR_000015_00_m.png": "0f597a3f57cf0951cb2603529f927095",
"assets/assets/images/chara_icon/CHR_000015_00_s.png": "925a31083d6ecb94765d1329d7d07b7a",
"assets/assets/images/chara_icon/CHR_000015_00_w.png": "b8d5f4d97f52bb91959e8e8cfb73c6b2",
"assets/assets/images/chara_icon/CHR_000016_00_l.png": "53b074c006641e0cdb9b2b0f7b788af0",
"assets/assets/images/chara_icon/CHR_000016_00_m.png": "6453fa3d6c39cce0362f71444389918b",
"assets/assets/images/chara_icon/CHR_000016_00_s.png": "ef2eb8e470e5276cba29c220ce93d583",
"assets/assets/images/chara_icon/CHR_000016_00_w.png": "8e618edd20ff94efa6819b9068cf43a8",
"assets/assets/images/chara_icon/CHR_000017_00_l.png": "fe94e27497986c2b8615b222f5bd224c",
"assets/assets/images/chara_icon/CHR_000017_00_m.png": "295864012fee01550ccc6eb14a946c1e",
"assets/assets/images/chara_icon/CHR_000017_00_s.png": "5ea98bbad04ef9eb135961c726f9721b",
"assets/assets/images/chara_icon/CHR_000017_00_w.png": "21326cd9bca04b8ad81638bfd07a4aa1",
"assets/assets/images/chara_icon/CHR_000018_00_l.png": "fef2b6d6a1f3d34f6feff1dfc3a76cb7",
"assets/assets/images/chara_icon/CHR_000018_00_m.png": "96b4f715954ca4ee76e32c4a003ae6d4",
"assets/assets/images/chara_icon/CHR_000018_00_s.png": "df45b947c7747b2e759e764fc8609bc1",
"assets/assets/images/chara_icon/CHR_000018_00_w.png": "b115d481d5fe709e0151d2e67fe6fb3f",
"assets/assets/images/chara_icon/CHR_000019_00_l.png": "173147f8ae304b2eb5c9c6849f22a293",
"assets/assets/images/chara_icon/CHR_000019_00_m.png": "d815080e28071c83aa7c9fe5e70e215f",
"assets/assets/images/chara_icon/CHR_000019_00_s.png": "f302becea725eb331c520e98f99ba0d0",
"assets/assets/images/chara_icon/CHR_000019_00_w.png": "95a8296a5f3618c603abc692fd04584a",
"assets/assets/images/chara_icon/CHR_000020_00_l.png": "2e9774bf78ae39f3a1d267e50102313e",
"assets/assets/images/chara_icon/CHR_000020_00_m.png": "ec08b869a70eaa14b6d33bc75c4114c3",
"assets/assets/images/chara_icon/CHR_000020_00_s.png": "f4b8aa1b86259442708c28f34fbddc10",
"assets/assets/images/chara_icon/CHR_000020_00_w.png": "8a75f405ab2c084ab0299c1010f2ab76",
"assets/assets/images/chara_icon/CHR_000021_00_l.png": "aa9665b41475b69438d7ff175260f911",
"assets/assets/images/chara_icon/CHR_000021_00_m.png": "48d9565e801c684ffe8c702a9cab2ae9",
"assets/assets/images/chara_icon/CHR_000021_00_s.png": "a3f17cfb2419ef5a16a9bd418e54670b",
"assets/assets/images/chara_icon/CHR_000021_00_w.png": "913cbafbcbfd5dff5cca140175cb421e",
"assets/assets/images/chara_icon/CHR_000022_00_l.png": "431d9ea411f8dc82eeb8c248cd949cd8",
"assets/assets/images/chara_icon/CHR_000022_00_m.png": "054beba2809dd8ba4faec3ac46453dd5",
"assets/assets/images/chara_icon/CHR_000022_00_s.png": "39c8227d800e46c1a30abd603f43c07b",
"assets/assets/images/chara_icon/CHR_000022_00_w.png": "932d1c34ff17a6d3023063000ac20acd",
"assets/assets/images/chara_icon/CHR_000023_00_l.png": "2378d9f97caeb12729a85f0bfbd48eec",
"assets/assets/images/chara_icon/CHR_000023_00_m.png": "fe47b04a35c93eaf3838685899c3c4ee",
"assets/assets/images/chara_icon/CHR_000023_00_s.png": "f881d609fe76dd18de77c501e9ef1330",
"assets/assets/images/chara_icon/CHR_000023_00_w.png": "34ff47cbe33f5342ad547068812f143b",
"assets/assets/images/chara_icon/CHR_000024_00_l.png": "aaad59b8e4d28796241ab2f789363463",
"assets/assets/images/chara_icon/CHR_000024_00_m.png": "c7598b05f41a2866cf576b86334c7821",
"assets/assets/images/chara_icon/CHR_000024_00_s.png": "a40b329f2f07f19baec010c048309b51",
"assets/assets/images/chara_icon/CHR_000024_00_w.png": "a92916222b5fbd5938534b91d3805676",
"assets/assets/images/chara_icon/CHR_000025_00_l.png": "05ca9e12d6aab5fbf27d60b5ab4b1845",
"assets/assets/images/chara_icon/CHR_000025_00_m.png": "fee2db9ef366a6426573aba33e093fe2",
"assets/assets/images/chara_icon/CHR_000025_00_s.png": "df4148e7032a7b7437cc48e2f91489ae",
"assets/assets/images/chara_icon/CHR_000025_00_w.png": "c0d3d3489287847dba2e780dce056710",
"assets/assets/images/chara_icon/CHR_000026_00_l.png": "b6c1ffdc2cddd26a1c2fa2447e2cb50d",
"assets/assets/images/chara_icon/CHR_000026_00_m.png": "89f3b09c7931b9aedb37848512efd081",
"assets/assets/images/chara_icon/CHR_000026_00_s.png": "00fd95ac23e34aa2bb253d8d4f92711e",
"assets/assets/images/chara_icon/CHR_000026_00_w.png": "7a925d0d51665457a75e071a4727c522",
"assets/assets/images/chara_icon/CHR_000027_00_l.png": "46b10667930804b7d22bea57b2e16dfb",
"assets/assets/images/chara_icon/CHR_000027_00_m.png": "81ff805bd86ef50171edca2bb1f835e1",
"assets/assets/images/chara_icon/CHR_000027_00_s.png": "194286de6659b4a6aaacc14d4382c2de",
"assets/assets/images/chara_icon/CHR_000027_00_w.png": "7841e4f24637f5c26ba5135f4a834d7e",
"assets/assets/images/chara_icon/CHR_000028_00_l.png": "fb442ad05fe89b83fc38a586bb522505",
"assets/assets/images/chara_icon/CHR_000028_00_m.png": "b20df9fbdd73d865a686df8912183e2e",
"assets/assets/images/chara_icon/CHR_000028_00_s.png": "50703339e2d5e72bff5e2cf14cb47779",
"assets/assets/images/chara_icon/CHR_000028_00_w.png": "3bd9a46bbdc89ef89c963757971f92f0",
"assets/assets/images/chara_icon/CHR_000029_00_l.png": "a2d21365e92b7292d10477bab9c6e832",
"assets/assets/images/chara_icon/CHR_000029_00_m.png": "03135e354e618415fc0a4bef95126cab",
"assets/assets/images/chara_icon/CHR_000029_00_s.png": "85af07782d78cf4bf0a3188ffb0c5ecb",
"assets/assets/images/chara_icon/CHR_000029_00_w.png": "f15b45c82ae9b7d7eb45f72dbfde860f",
"assets/assets/images/chara_icon/CHR_000030_00_l.png": "7a1a6ac09cf84916fe17ecc3e4729a0c",
"assets/assets/images/chara_icon/CHR_000030_00_m.png": "258c447dc6a55850a1b2202e26f79c20",
"assets/assets/images/chara_icon/CHR_000030_00_s.png": "019af5e880d79a71c92d3c0bf080f462",
"assets/assets/images/chara_icon/CHR_000030_00_w.png": "5ae36fadab40a7020ffcd6757e4a70a4",
"assets/assets/images/chara_icon/CHR_000031_00_l.png": "d378231860e888f1c75a569f4c9113b8",
"assets/assets/images/chara_icon/CHR_000031_00_m.png": "f534f72ac6446040b7b346b9807792dc",
"assets/assets/images/chara_icon/CHR_000031_00_s.png": "fe380d8bfb76e9b097128d33b9adf058",
"assets/assets/images/chara_icon/CHR_000031_00_w.png": "4ea6eabaa060d86b6c332652d6f25ae4",
"assets/assets/images/chara_icon/CHR_000032_00_l.png": "a66ff35c5dbeb2844110fe1178e4a1e4",
"assets/assets/images/chara_icon/CHR_000032_00_m.png": "5279876dbb7f8a4ff1dd693cf4f4325a",
"assets/assets/images/chara_icon/CHR_000032_00_s.png": "44079126699e74e6cdc30365d5001207",
"assets/assets/images/chara_icon/CHR_000032_00_w.png": "2fd06d9b8fcf9086a457b6c2f49ad642",
"assets/assets/images/chara_icon/CHR_000033_00_l.png": "aeda52158916ab80eb4a704990a16a2b",
"assets/assets/images/chara_icon/CHR_000033_00_m.png": "902b07fd97f7717f44cfacf53ffc73ed",
"assets/assets/images/chara_icon/CHR_000033_00_s.png": "f53f64870b0f2438a09c8bedc9aa368e",
"assets/assets/images/chara_icon/CHR_000033_00_w.png": "cd76ac1d6255176c4305d6e99faa53f9",
"assets/assets/images/chara_icon/CHR_000034_00_l.png": "6e387935bf6a5a972e164caac2d33d7c",
"assets/assets/images/chara_icon/CHR_000034_00_m.png": "301fd4f82f92fcfb4ad518fd996a6a94",
"assets/assets/images/chara_icon/CHR_000034_00_s.png": "88262c2702754936a0412863f4c6d58a",
"assets/assets/images/chara_icon/CHR_000034_00_w.png": "36e58b16e05bbd0a01b9f944b948ae8e",
"assets/assets/images/chara_icon/CHR_000035_00_l.png": "deedc77c604dc9fb19ad1337090468a9",
"assets/assets/images/chara_icon/CHR_000035_00_m.png": "cc504778d70e6ddba9d762d7155d28c7",
"assets/assets/images/chara_icon/CHR_000035_00_s.png": "425672ffdb0cc77ba66d08f3c8cdf00d",
"assets/assets/images/chara_icon/CHR_000035_00_w.png": "53b616087131f9caeea88e3b22979a3f",
"assets/assets/images/chara_icon/CHR_000036_00_l.png": "f196e25cf8a2ef3b8c1dea1a596eb557",
"assets/assets/images/chara_icon/CHR_000036_00_m.png": "a078cfdb40bf5aa986b965fe296c4d5f",
"assets/assets/images/chara_icon/CHR_000036_00_s.png": "2f5ad772ba49fa32e3e0fe5b740baf6f",
"assets/assets/images/chara_icon/CHR_000036_00_w.png": "e4d34b55395b19bc5832016f4fb4fcce",
"assets/assets/images/chara_icon/CHR_000037_00_l.png": "70f90cadfbf1c54b695def6727512cb7",
"assets/assets/images/chara_icon/CHR_000037_00_m.png": "d29949c7f1c428ffe39def6360e7cd3e",
"assets/assets/images/chara_icon/CHR_000037_00_s.png": "085d0716f60d3b63b91156afdaeff20a",
"assets/assets/images/chara_icon/CHR_000037_00_w.png": "c1f337ca363f29740b4542397f4dd464",
"assets/assets/images/chara_icon/CHR_000038_00_l.png": "0702a1590b1a797d875dc0c7aac53faa",
"assets/assets/images/chara_icon/CHR_000038_00_m.png": "d03a778b178652ef664bcb4036f42300",
"assets/assets/images/chara_icon/CHR_000038_00_s.png": "3005efc544363d8f26697b3b2a9a6e3a",
"assets/assets/images/chara_icon/CHR_000038_00_w.png": "a4a03c0ec80c9ac0438cb907474fe343",
"assets/assets/images/chara_icon/CHR_000039_00_l.png": "09a44f2cadac64431b0be9184737664e",
"assets/assets/images/chara_icon/CHR_000039_00_m.png": "cb4d0438f9d437279bbd8050dc36bf2b",
"assets/assets/images/chara_icon/CHR_000039_00_s.png": "4b40d6d8fdb1cd6abdd276363caeffc9",
"assets/assets/images/chara_icon/CHR_000039_00_w.png": "fa5a5ca60bd7c0c859583c0abbb0698d",
"assets/assets/images/chara_icon/CHR_000040_00_l.png": "a17ff8ce1bf0701d9f330d9a97f030a5",
"assets/assets/images/chara_icon/CHR_000040_00_m.png": "a8ca7238ed8fa5a2669a035e1d289d83",
"assets/assets/images/chara_icon/CHR_000040_00_s.png": "82a16b2d9c175be49316f26fec20a2a4",
"assets/assets/images/chara_icon/CHR_000040_00_w.png": "59782a33088391b60ae6a4da7ac72332",
"assets/assets/images/chara_icon/CHR_000041_00_l.png": "8ab0b6e43f71224e622e620d971aee97",
"assets/assets/images/chara_icon/CHR_000041_00_m.png": "ef1e4fc53359980605e6c6aadc8182f9",
"assets/assets/images/chara_icon/CHR_000041_00_s.png": "2d1b4016385600d71485feebcec4e037",
"assets/assets/images/chara_icon/CHR_000041_00_w.png": "cf4dcdf5ee03a7f33cca16bca7b94d95",
"assets/assets/images/chara_icon/CHR_000041_01_s.png": "ab2daed6a797bc5b459ddb7eec9af158",
"assets/assets/images/chara_icon/CHR_000042_00_l.png": "fd13452a863388aeb585fcdadb40ef30",
"assets/assets/images/chara_icon/CHR_000042_00_m.png": "293c80a17a5a6e66f7f55adaa25024e8",
"assets/assets/images/chara_icon/CHR_000042_00_s.png": "2bbd66f95fbcd44ef97af4e96885fb04",
"assets/assets/images/chara_icon/CHR_000042_00_w.png": "e696531f6d920f711a96abdf59615585",
"assets/assets/images/chara_icon/CHR_000042_01_s.png": "b6989c15583b3a7f934c088fd0aa5775",
"assets/assets/images/chara_icon/CHR_000043_00_l.png": "7f4a01fc9b4e44f0162bb8e115bec267",
"assets/assets/images/chara_icon/CHR_000043_00_m.png": "2b68abcedf706757172b7d35218fc7d9",
"assets/assets/images/chara_icon/CHR_000043_00_s.png": "4f654280c58e94d420987e94a32a825a",
"assets/assets/images/chara_icon/CHR_000043_00_w.png": "161994f3589f842e5b093ca5f1b0140a",
"assets/assets/images/chara_icon/CHR_000043_01_s.png": "dbb544d77329ca52587b110972505701",
"assets/assets/images/chara_icon/CHR_000044_00_l.png": "b180d1951f502542b3144e2fac9751cb",
"assets/assets/images/chara_icon/CHR_000044_00_m.png": "ce8e8b83a9fe2adcae93e60c5d721f66",
"assets/assets/images/chara_icon/CHR_000044_00_s.png": "dac359429dcb8f797ef9157add019c43",
"assets/assets/images/chara_icon/CHR_000044_00_w.png": "d362dfffbdce09ba6712cbad37b44e0f",
"assets/assets/images/chara_icon/CHR_000044_01_s.png": "c1dad31b31f80c40b09dcd13ecb6813f",
"assets/assets/images/chara_icon/CHR_000046_00_l.png": "83c0d30febb8e7dfd27dc94dce84082b",
"assets/assets/images/chara_icon/CHR_000046_00_m.png": "f6990afd058bc12861e17e022de5713b",
"assets/assets/images/chara_icon/CHR_000046_00_s.png": "04a9181da3dd8db5973cb86c8f827920",
"assets/assets/images/chara_icon/CHR_000046_00_w.png": "bb1e605c97ec37bc5f0e583438a0ca14",
"assets/assets/images/chara_icon/CHR_000046_01_s.png": "16398d5c637d2d341302b8d35ad9e4d0",
"assets/assets/images/chara_icon/CHR_000047_00_l.png": "adb7f960360cf1dedcdb0cdb87a56085",
"assets/assets/images/chara_icon/CHR_000047_00_m.png": "cecf9e690dfc152db1044f6aaa400409",
"assets/assets/images/chara_icon/CHR_000047_00_s.png": "80d50156dafddf7dfdefb9a9fadcce19",
"assets/assets/images/chara_icon/CHR_000047_00_w.png": "eeb78311fc82f143159034a8f21cdcd8",
"assets/assets/images/chara_icon/CHR_000047_01_s.png": "152bcfe288ccedb4598fbd2d3dbebcd1",
"assets/assets/images/chara_icon/CHR_000048_00_l.png": "8332475bb2611707191e34d00bdb08ee",
"assets/assets/images/chara_icon/CHR_000048_00_m.png": "3efe0864ed2d47bccf61252d3b2ac05e",
"assets/assets/images/chara_icon/CHR_000048_00_s.png": "68c5a01cd8c8c342b5625dbfff52fe7c",
"assets/assets/images/chara_icon/CHR_000048_00_w.png": "5884e3d6f18ddd13949d904a5fdeec13",
"assets/assets/images/chara_icon/CHR_000048_01_s.png": "da7c2aacbae7e6934d6e7b17007314eb",
"assets/assets/images/chara_icon/CHR_000049_00_l.png": "89d16893fd8fc7176d3ecb01eadbb6e5",
"assets/assets/images/chara_icon/CHR_000049_00_m.png": "7a57a8a1fe463bf65c7029e8ec71a372",
"assets/assets/images/chara_icon/CHR_000049_00_s.png": "c21aa3133e013b2c5920d7f539882d62",
"assets/assets/images/chara_icon/CHR_000049_00_w.png": "4c0735fe3677dd6ba2934e5e29415d24",
"assets/assets/images/chara_icon/CHR_000049_01_s.png": "be3cddf353637b334f14e2f3dfe62ee6",
"assets/assets/images/element_icon/1.png": "bbf2c6077dfed3ed9753b5012e794c19",
"assets/assets/images/element_icon/2.png": "a293d387b762eeb72c46383cb020a76c",
"assets/assets/images/element_icon/3.png": "05ef627e7e7c0398764555ca41b365a2",
"assets/assets/images/element_icon/4.png": "58077d416ec54227459837f5d506ad6e",
"assets/assets/images/element_icon/5.png": "7f38939ce154f832673db602e37c9322",
"assets/assets/images/element_icon/6.png": "e4548f4c794fccf3b41a9dc54ce4b023",
"assets/assets/images/job_icon/1.png": "bd1f6900be4c0f011c45ee4be2669f2c",
"assets/assets/images/job_icon/2.png": "65db758c673b059b4c7a3f3338cd89f1",
"assets/assets/images/job_icon/4.png": "2d39b416efc89bc1c9015a71b82da584",
"assets/assets/images/other/no_image.png": "9d9e3187449766cc038e3546a4511c66",
"assets/assets/images/other/youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/images/skill/CSK_000000001.png": "39b9ae7ceb5c3691fd433ce1a42203ef",
"assets/assets/images/skill/CSK_000000002.png": "c4cd3935244bf58f24b8cc06ae1dcc3b",
"assets/assets/images/skill/CSK_000001001.png": "f5872bdbcc545b7379f1dc0ad19586df",
"assets/assets/images/skill/CSK_000001002.png": "920940ff3e62e7dd9f467a9cb6277357",
"assets/assets/images/skill/CSK_000002001.png": "69f18d2c6868858f4450a65d02829dce",
"assets/assets/images/skill/CSK_000002002.png": "950f3c18425c40420bd46802cde35d49",
"assets/assets/images/skill/CSK_000002003.png": "dcdc590713e0e8fc37b4e59d4e00cbca",
"assets/assets/images/skill/CSK_000003001.png": "aaeac8b265cef6bbdc59aca1a0c8157d",
"assets/assets/images/skill/CSK_000003002.png": "5265182706531fc7268a39903300002e",
"assets/assets/images/skill/CSK_000003003.png": "3c4fa15a79d5f9a0a0ca46c9362d71fb",
"assets/assets/images/skill/CSK_000004001.png": "aff825b167b55a4064ffa1c13425f8b1",
"assets/assets/images/skill/CSK_000004002.png": "50ed6bc8c8de2e3d1dba53b19fb3bd21",
"assets/assets/images/skill/CSK_000004003.png": "d9a544789ec2d5da475d811dc679951d",
"assets/assets/images/skill/CSK_000005001.png": "8878220a56a853ea3b92a3928df0c599",
"assets/assets/images/skill/CSK_000005002.png": "9a36136a419a5e45aea3867dada8895b",
"assets/assets/images/skill/CSK_000005003.png": "23b2c438c1d82b7b3b1dd23dae36729d",
"assets/assets/images/skill/CSK_000005004.png": "d1c273e66aa85f35eb98aeaf39e85fa3",
"assets/assets/images/skill/CSK_000006001.png": "fec394fa0f9e23f6c9fdfad1ae4d0aa6",
"assets/assets/images/skill/CSK_000006002.png": "3e2e6b9e1ccbf304b97ad04993cd17c0",
"assets/assets/images/skill/CSK_000006003.png": "7dce814dcc7ece0ddc41c7412d9373c6",
"assets/assets/images/skill/CSK_000006004.png": "02b29961f59ef692ea8327ece0ae3ab0",
"assets/assets/images/skill/CSK_000007001.png": "a855ec6a0b9a7131ff67ec7fc9ef48ea",
"assets/assets/images/skill/CSK_000007002.png": "72d412933fdb9590b6dd84aa2c0dd49e",
"assets/assets/images/skill/CSK_000007003.png": "2504adbf1c46790dbb4127be9fba66e1",
"assets/assets/images/skill/CSK_000007004.png": "fac8af2ea15cb8783f4290d3a7f7a80e",
"assets/assets/images/skill/CSK_000008001.png": "0fff9d4db018516d36812147c44a046c",
"assets/assets/images/skill/CSK_000008002.png": "5b6a6985abe3d65ccbf55388954e9268",
"assets/assets/images/skill/CSK_000008003.png": "fea41e2304eacb63b854358e514b813f",
"assets/assets/images/skill/CSK_000008004.png": "cab81c8f1402874a4480df0ddffae7bd",
"assets/assets/images/skill/CSK_000009001.png": "dea5cf4b8f482428d44dbea04723a7eb",
"assets/assets/images/skill/CSK_000009002.png": "4be20a869fefe1167e96ceb103033b4c",
"assets/assets/images/skill/CSK_000009003.png": "eeaf642789d5d3a593c233ae0751a1aa",
"assets/assets/images/skill/CSK_000009004.png": "789658a1422ef6a67a5841c543d33fcd",
"assets/assets/images/skill/CSK_000010001.png": "8cbb3c276ddbf8944f5966f214bf1470",
"assets/assets/images/skill/CSK_000010002.png": "3fd3396310a6e81846b72585431e59b1",
"assets/assets/images/skill/CSK_000010003.png": "8582e5f2e60434cd1c97668e3e641cf6",
"assets/assets/images/skill/CSK_000010004.png": "b3e34082bfd161a6f9ea6173c3808927",
"assets/assets/images/skill/CSK_000011001.png": "718a500e154316806a239931aab9d565",
"assets/assets/images/skill/CSK_000011002.png": "d4ea70c32f818b5d75c66fa240a6aff4",
"assets/assets/images/skill/CSK_000012001.png": "403e85beae2da63e0b2edaf69db1cc35",
"assets/assets/images/skill/CSK_000012002.png": "46e0dd7b9b187c0349532613251c1150",
"assets/assets/images/skill/CSK_000012003.png": "47b7f6cd7a4f96e7249761f7a21a572a",
"assets/assets/images/skill/CSK_000013001.png": "edaccd0987a0614c17343a89eeba5b15",
"assets/assets/images/skill/CSK_000013002.png": "fe8fb788b42c469945d0b8e63868b053",
"assets/assets/images/skill/CSK_000013003.png": "bab9d9d3f9d044dcfcd8b4341baf5082",
"assets/assets/images/skill/CSK_000014001.png": "091980331c9bc1a37e9dd024a8dee4ce",
"assets/assets/images/skill/CSK_000014002.png": "5ab19278a3289e57dd1289b7dcefc67a",
"assets/assets/images/skill/CSK_000014003.png": "464feac38fdaff3bbc0119a0dfb5b1d6",
"assets/assets/images/skill/CSK_000015001.png": "88650c075f06f5fbbec0d24b8c052636",
"assets/assets/images/skill/CSK_000015002.png": "a770d76a7e6731e971793d59287bb8b4",
"assets/assets/images/skill/CSK_000015003.png": "eec5111a1faced6eb48301ab333b7480",
"assets/assets/images/skill/CSK_000015004.png": "4e8361ec930d01c42e14f58610af0a7f",
"assets/assets/images/skill/CSK_000016001.png": "26e2e59c366ff1a26829093a6364ecbd",
"assets/assets/images/skill/CSK_000016002.png": "7f2a0cb88862fa2c2330d413d30da2ce",
"assets/assets/images/skill/CSK_000016003.png": "7b50c3510b018baefbf8f5513e4ccc95",
"assets/assets/images/skill/CSK_000016004.png": "36aa12d8792f03e34e9b7e2ec2eb5328",
"assets/assets/images/skill/CSK_000017001.png": "efd0d84a98914a94250950cc87ac291c",
"assets/assets/images/skill/CSK_000017002.png": "b424d6db2f6d7903909fb57cb7b38944",
"assets/assets/images/skill/CSK_000017003.png": "f7224da11ed2a631eae3ff7be054de0b",
"assets/assets/images/skill/CSK_000017004.png": "acce68c13a4c2a8b60d900668f1f2315",
"assets/assets/images/skill/CSK_000018001.png": "929a3dd882965d13aa022ede58b60ed2",
"assets/assets/images/skill/CSK_000018002.png": "c4abea563e121c9449f157c96ccfb651",
"assets/assets/images/skill/CSK_000018003.png": "d23c3b6627710e39a4ea3c4ae9bfed83",
"assets/assets/images/skill/CSK_000018004.png": "96b3f3c69d047c1a5fef56ade82f2a4c",
"assets/assets/images/skill/CSK_000019001.png": "38c686079db297e256036b577366ea19",
"assets/assets/images/skill/CSK_000019002.png": "bd63136947daf77c2ee76a30a3399bb6",
"assets/assets/images/skill/CSK_000019003.png": "2921aedcefc2bb3505630a2429aa7cef",
"assets/assets/images/skill/CSK_000019004.png": "7f817103c84a65777eceeb7163ddd464",
"assets/assets/images/skill/CSK_000020001.png": "cb53ed2af18668d1be6ce576f7809f53",
"assets/assets/images/skill/CSK_000020002.png": "2142f8a7a9b9567884dfb301f862a942",
"assets/assets/images/skill/CSK_000020003.png": "d58217efa75dda4b5defc9059a94b029",
"assets/assets/images/skill/CSK_000020004.png": "bd967c41f16d8493c35c0d58b127827f",
"assets/assets/images/skill/CSK_000021001.png": "d6496c0d3a4e6d5f196f5c89c5f9da6a",
"assets/assets/images/skill/CSK_000021002.png": "6912260e39e55b57b7c2578b647e69a1",
"assets/assets/images/skill/CSK_000022001.png": "dedb06ed1e40aa46b65517929f7196a2",
"assets/assets/images/skill/CSK_000022002.png": "4d8cecf85a166810fd6d83d134f5e2fd",
"assets/assets/images/skill/CSK_000022003.png": "f48d9f7ad24c2eadd9e1c5b20a21c975",
"assets/assets/images/skill/CSK_000023001.png": "4116944e4fcb4dbcccd74219291e835e",
"assets/assets/images/skill/CSK_000023002.png": "a2cf623a2c869e3d9ce2c20c0a85a1c7",
"assets/assets/images/skill/CSK_000023003.png": "bbe420ac5488ed92e66fb279734bb477",
"assets/assets/images/skill/CSK_000024001.png": "73edf5f034a0c0517950663098c58ab0",
"assets/assets/images/skill/CSK_000024002.png": "4cbe8d0488be62d6648d3c3861e01d31",
"assets/assets/images/skill/CSK_000024003.png": "4f3ff60d699809baf4d3140f9c23bca5",
"assets/assets/images/skill/CSK_000025001.png": "99a910bdf4e4e3fe8a579216ff97bcb4",
"assets/assets/images/skill/CSK_000025002.png": "82634699794b64af8dccae191095fe36",
"assets/assets/images/skill/CSK_000025003.png": "8e4ae98f83e03f3a5d867f7f929acdd3",
"assets/assets/images/skill/CSK_000025004.png": "ec89fa196e176495c3ddce0975e25f12",
"assets/assets/images/skill/CSK_000026001.png": "5748a535a35598aff47273161a85d1ea",
"assets/assets/images/skill/CSK_000026002.png": "37c13fc6383322eec4324c3e1d33979c",
"assets/assets/images/skill/CSK_000026003.png": "6f1a2cc594421ff4f7660c0e1436a4bb",
"assets/assets/images/skill/CSK_000026004.png": "42819490cb737b767b9a100808af0128",
"assets/assets/images/skill/CSK_000027001.png": "bea3ed68fa2fc89dba23c304fb85d188",
"assets/assets/images/skill/CSK_000027002.png": "be89b269f3b9eee79423f5eedfcc9adb",
"assets/assets/images/skill/CSK_000027003.png": "a8a8a9ceac12bf7c6b849c291ea45665",
"assets/assets/images/skill/CSK_000027004.png": "fdb019dd282a02cef718abbfefe4e541",
"assets/assets/images/skill/CSK_000028001.png": "81499bed6682c5ac1768cac3ae26d71c",
"assets/assets/images/skill/CSK_000028002.png": "22bbef6460dad8a33b09bea82f1deaad",
"assets/assets/images/skill/CSK_000028003.png": "d5478a0a47eeea66652a06dc494b809b",
"assets/assets/images/skill/CSK_000028004.png": "05f338ed99b9c8bab4a6afc8c272b059",
"assets/assets/images/skill/CSK_000029001.png": "a69a9e06ec6cd5169a481fa72b1a9565",
"assets/assets/images/skill/CSK_000029002.png": "af3018bcbe926d948353daf284977c2d",
"assets/assets/images/skill/CSK_000029003.png": "cb7cf84d0328e4a6e49076499d9b15b7",
"assets/assets/images/skill/CSK_000029004.png": "5f03abdeb16d020530a2e93485fa3f63",
"assets/assets/images/skill/CSK_000030001.png": "a831617868366ec75e5974a306e4a3e8",
"assets/assets/images/skill/CSK_000030002.png": "76d62df89e5d9b36e564be9a7f4aca4c",
"assets/assets/images/skill/CSK_000030003.png": "15174ae91e48a9989751ef80c5e4ff62",
"assets/assets/images/skill/CSK_000030004.png": "f8d0f0aff84ed18937997102a1bb3e3e",
"assets/assets/images/skill/CSK_000031001.png": "8c60c6fabbea94a1cdafc10bf07eb8bc",
"assets/assets/images/skill/CSK_000031002.png": "37092276bb8fbf13cb792594049c1444",
"assets/assets/images/skill/CSK_000032001.png": "653afe360753638a66a2126f4cc40d54",
"assets/assets/images/skill/CSK_000032002.png": "d4fe7cf8bc4177d5f835449ebe5964f7",
"assets/assets/images/skill/CSK_000032003.png": "3533098457878c920ac806ed7753ce52",
"assets/assets/images/skill/CSK_000033001.png": "01a0c5cf1697b6ccf4ead75fb976b035",
"assets/assets/images/skill/CSK_000033002.png": "200866ac090457860c4cf246c1bdfad9",
"assets/assets/images/skill/CSK_000033003.png": "2ba06d38c135981e253a560c573e3f11",
"assets/assets/images/skill/CSK_000034001.png": "a7d3fb902d2e653eda05a4c8b39b3f6b",
"assets/assets/images/skill/CSK_000034002.png": "b6dba80a12ed763998571ad9649750c9",
"assets/assets/images/skill/CSK_000034003.png": "3d33c53d573ac3f8f0ff6177657d1643",
"assets/assets/images/skill/CSK_000035001.png": "9881a4dea1bc98e0d5c8bea7540808e4",
"assets/assets/images/skill/CSK_000035002.png": "f86829754bc40920cbc42764ae7a9e8d",
"assets/assets/images/skill/CSK_000035003.png": "0f0c91676b82a903b41338eb76291b90",
"assets/assets/images/skill/CSK_000035004.png": "214b4b4879fc79e811b15d22331f0d19",
"assets/assets/images/skill/CSK_000036001.png": "76359d45e1cb4323aec07e6aa4fe64e7",
"assets/assets/images/skill/CSK_000036002.png": "86cf707a6fcb2901d82c2f233c5d8f90",
"assets/assets/images/skill/CSK_000036003.png": "fe5c687f24b61b5c99384644b51aee47",
"assets/assets/images/skill/CSK_000036004.png": "ed194126137e451f254081aa84dc1bd2",
"assets/assets/images/skill/CSK_000037001.png": "e9ab57df827a3e141b7cf60d06114bf6",
"assets/assets/images/skill/CSK_000037002.png": "4f36006ef4ca558828880f581e30ec6c",
"assets/assets/images/skill/CSK_000037003.png": "2c61310817ac6f84901e9f3cfe56ec0f",
"assets/assets/images/skill/CSK_000037004.png": "edfa75ad3d171a1b6773c64a02117cae",
"assets/assets/images/skill/CSK_000038001.png": "ee93ff94df0f9fb6f72e8291f7e3fa2d",
"assets/assets/images/skill/CSK_000038002.png": "55b4ea3965880abcc04c298c70ef39a1",
"assets/assets/images/skill/CSK_000038003.png": "d8f08c06db5f45cd03c1e4708cd88e91",
"assets/assets/images/skill/CSK_000038004.png": "d871cd2d4a6cb79dbb84b17315a5bff9",
"assets/assets/images/skill/CSK_000039001.png": "5e383333f4122977a827586c48310320",
"assets/assets/images/skill/CSK_000039002.png": "784e5211424eeb23ac5086ed970b2791",
"assets/assets/images/skill/CSK_000039003.png": "c806bb8d8f45a9581733d160579ca8d3",
"assets/assets/images/skill/CSK_000039004.png": "1b1b17841554e0124bb9d8067b6e58ce",
"assets/assets/images/skill/CSK_000040001.png": "d72f4a1cc0f54d9632682fbc6a750781",
"assets/assets/images/skill/CSK_000040002.png": "2265cd53631015dfae9ff8e8f9d484be",
"assets/assets/images/skill/CSK_000040003.png": "3be235b48da4666fd44cec2094b5b506",
"assets/assets/images/skill/CSK_000040004.png": "4a4455fe39ee7393a170ebe904ef99d1",
"assets/assets/images/skill/CSK_000041001.png": "1a69e22d0eed285b89817f5638fa26c4",
"assets/assets/images/skill/CSK_000041002.png": "57a4a1218dec9c6409791470baa4dab7",
"assets/assets/images/skill/CSK_000041003.png": "c03be516b443326c4630de28b69f51fd",
"assets/assets/images/skill/CSK_000041004.png": "ec0899ddf58d965e5d00a3e6d0489537",
"assets/assets/images/skill/CSK_000042001.png": "f222ca220d3ca6be3b1c1cff81a97861",
"assets/assets/images/skill/CSK_000042002.png": "45ab2d02a7187c981c7f0eec4aac49c0",
"assets/assets/images/skill/CSK_000042003.png": "75ef812aa89bc42e0a63101044047ec4",
"assets/assets/images/skill/CSK_000042004.png": "48fd4eff8d6f2993a762fb1eff751d36",
"assets/assets/images/skill/CSK_000043001.png": "a2325f9b301e04a4055a9e8711383c5c",
"assets/assets/images/skill/CSK_000043002.png": "3242700df226654e3cb60eb958bb04b1",
"assets/assets/images/skill/CSK_000043003.png": "38d19970c8e94d6705a968d44a6cf800",
"assets/assets/images/skill/CSK_000043004.png": "8f9968b1a7a04f7331401e88b8235203",
"assets/assets/images/skill/CSK_000044001.png": "72d6094afe75acbef7c2e1268d8a94c6",
"assets/assets/images/skill/CSK_000044002.png": "5656e548fc35dfce5796c9b5a4e456ce",
"assets/assets/images/skill/CSK_000044003.png": "3fccf18c1a0daa5ddc073e12cfdab3bd",
"assets/assets/images/skill/CSK_000044004.png": "8a92b96022ce77afe58b1c45a14f032e",
"assets/assets/images/skill/CSK_000045001.png": "f5a5c2190722454dcd64ba0e347cab81",
"assets/assets/images/skill/CSK_000045002.png": "f5a5c2190722454dcd64ba0e347cab81",
"assets/assets/images/skill/CSK_000045003.png": "f5a5c2190722454dcd64ba0e347cab81",
"assets/assets/images/skill/CSK_000045004.png": "f5a5c2190722454dcd64ba0e347cab81",
"assets/assets/images/skill/CSK_000046001.png": "b8105c81f0db362636d5bf65d5658370",
"assets/assets/images/skill/CSK_000046002.png": "616ba6bee936431576a238144996c596",
"assets/assets/images/skill/CSK_000046003.png": "7dc396cadab1bfd976c1032541ef46e9",
"assets/assets/images/skill/CSK_000046004.png": "7235c0a374e58478b9fe789577977227",
"assets/assets/images/skill/CSK_000047001.png": "2bed44d881b8d904217b50bd25a8f4ef",
"assets/assets/images/skill/CSK_000047002.png": "a557820e55bc6c6817e0778e60135c82",
"assets/assets/images/skill/CSK_000047003.png": "9f9bca0eea7808ebe5eafcb5c61d1fa4",
"assets/assets/images/skill/CSK_000047004.png": "be43031ed7c0323aba051dc2803b4430",
"assets/assets/images/skill/CSK_000048001.png": "c9ef50fbefc082a6a95bab0a2fe04eae",
"assets/assets/images/skill/CSK_000048002.png": "8372fea968bb5413fce677ad681b514d",
"assets/assets/images/skill/CSK_000048003.png": "24448bb0b8e2ed5baff7f98126720856",
"assets/assets/images/skill/CSK_000048004.png": "a477b24865e0569a28ff14af8449216b",
"assets/assets/images/skill/CSK_000049001.png": "a68d01479f3be37865b6437247ca5ac4",
"assets/assets/images/skill/CSK_000049002.png": "4a7b73084501e2741b3c32b26d217a5f",
"assets/assets/images/skill/CSK_000049003.png": "ce007da97278ec628a3be875ecf0cb2a",
"assets/assets/images/skill/CSK_000049004.png": "4e380de62c9376fecc800027a425c9e3",
"assets/assets/images/skill/CSK_550000001.png": "c5e06399eb633dc4d29f48dd0926bd54",
"assets/assets/images/skill/CSK_550000002.png": "4aadfa03d5780cb7848687a5fdbf24c8",
"assets/assets/json/ActiveSkillMB.json": "3a1608fc4980528fd75c8453a7ec6125",
"assets/assets/json/CharacterDetailVoiceMB.json": "523b0b9060cf17249053fa29011c6995",
"assets/assets/json/CharacterMB.json": "c3d80b606bbee7a9b11002020b5e6726",
"assets/assets/json/CharacterProfileMB.json": "3795205e49e1e33580601c309f5edb5a",
"assets/assets/json/CharacterStoryMB.json": "c9cb816c4d9be56af3b4ad6ce83132b0",
"assets/assets/json/PassiveSkillMB.json": "6ea1c82d54ea4dc5855901e4e3e6db67",
"assets/assets/json/TextResourceMB.json": "4bbfd8b78295fc8898ffafe39a616dd5",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3f54583258812e487fc889afe200616b",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ae89460aaa1df51bca73dfa49709ebc3",
"/": "ae89460aaa1df51bca73dfa49709ebc3",
"main.dart.js": "7ac2672e7e8d273d0d7447705151a2ad",
"manifest.json": "ce9750c3ce5bfe2511b199dc5579a01d",
"version.json": "3a7863c7ecdf926d612888fadf8bdb47"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
