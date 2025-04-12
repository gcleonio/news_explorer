const articles = [].map((article) => ({
  ...article,
  _id: crypto.randomUUID(),
}));

const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articles);
    }, 500);
  });
};

const saveArticles = async ({ _id, isSaved, article, savedArticles }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isSaved) {
        savedArticles = [...savedArticles, article];
      } else {
        savedArticles = savedArticles.filter((item) => item?._id !== _id);
      }
      resolve(savedArticles);
    }, 500);
  });
};

export { getArticles, saveArticles };

// export function getItems() {
//   return new Promise((resolve, reject) =>
//     resolve([
//       {
//         source: {
//           id: null,
//           name: "Fake Name News",
//         },
//         author: "John Wick",
//         title: "Some news article",
//         description: "Some description.",
//         url: "https://www.morningstar.com/news/pr-newswire/20250403ph57401/nasa-astronaut-chris-williams-assigned-to-first-space-station-mission",
//         urlToImage:
//           "https://mma.prnewswire.com/media/2657772/Christopher_Williams.jpg",
//         publishedAt: "2000-88-16T19:09:50Z",
//         content:
//           "Some content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       },
//       {
//         source: {
//           id: null,
//           name: "Eonline.com",
//         },
//         author: null,
//         title:
//           'Grimes Says She Has "Begged" Elon Musk to Keep Their Kids "Offline"',
//         description:
//           'Grimes is pleading for more privacy for her and Elon Musk\'s kids.\nAfter being criticized over an X post attributed to her about the alleged sex lives of "many Fortune 500 CEOs," the musician...',
//         url: "https://www.eonline.com/news/1414843/grimes-says-she-begged-elon-musk-to-keep-kids-offline",
//         urlToImage:
//           "https://akns-images.eonline.com/eol_images/Entire_Site/202379/cr_1200x1200-230809142536-GettyImages-1463186805.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
//         publishedAt: "2025-03-16T19:09:05Z",
//         content:
//           'Elon and the singer dated on-and-off for four years, starting in 2018. In September 2021, Elon told Page Six that he and Grimes "are, I\'d say, probably semi-separated," adding, "It\'s mostly that my w… [+1265 chars]',
//       },
//       {
//         source: {
//           id: null,
//           name: "Techdirt",
//         },
//         author: "Leigh Beadon",
//         title: "Funniest/Most Insightful Comments Of The Week At Techdirt",
//         description:
//           "This week, our first place winner on the insightful side is Rocky with a reply to an unhinged comment about the “debunked” Steele Dossier “funded by Hillary Clinton”: What’s funny here is that you don’t actually know the origin of said dossier or you have con…",
//         url: "https://www.techdirt.com/2025/03/16/funniest-most-insightful-comments-of-the-week-at-techdirt-152/",
//         urlToImage:
//           "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
//         publishedAt: "2025-03-16T19:00:00Z",
//         content:
//           "from the what-were-you-saying dept\r\nThis week, our first place winner on the insightful side is Rocky with a reply to an unhinged comment about the “debunked” Steele Dossier “funded by Hillary Clinto… [+3995 chars]",
//       },
//       {
//         source: {
//           id: null,
//           name: "Biztoc.com",
//         },
//         author: "electrek.co",
//         title:
//           "Tesla Autopilot drives into Wile E Coyote fake road wall in camera vs lidar test",
//         description:
//           "Tesla Autopilot drove into Wile E. Coyote-style fake road wall in the middle of the road in a camera versus lidar test.\nWhile most companies developing self-driving technologies have been using a mix of sensors (cameras, radar, lidar, and ultrasonic), Tesla i…",
//         url: "https://biztoc.com/x/e531b8042f355d8d",
//         urlToImage: "https://biztoc.com/cdn/e531b8042f355d8d_s.webp",
//         publishedAt: "2025-03-16T18:38:39Z",
//         content:
//           "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]",
//       },
//       {
//         source: {
//           id: null,
//           name: "Freerepublic.com",
//         },
//         author: null,
//         title: "Why the Democrat party is trying to destroy Elon Musk.",
//         description:
//           "VIDEO: Joe Rogan interview with Elon Musk Summary of what Elon says: The main reason the Left is after him is because DOGE will put an end to entitlement (Social Security, Disability, Medicaid, etc. ) fraud for illegal aliens, which is the magnet that draws t…",
//         url: "https://freerepublic.com/focus/f-news/4304664/posts",
//         urlToImage: null,
//         publishedAt: "2025-03-16T18:30:55Z",
//         content:
//           "Skip to comments.\r\nWhy the Democrat party is trying to destroy Elon Musk.Posted on 03/16/2025 11:30:55 AM PDT by E. Pluribus Unum\r\nVIDEO: Joe Rogan interview with Elon Musk \r\nSummary of what Elon say… [+2167 chars]",
//       },
//       {
//         source: {
//           id: null,
//           name: "Biztoc.com",
//         },
//         author: "benzinga.com",
//         title:
//           "Anti-Musk Protester Vandalizes Tesla Cybertruck With Swastika, Shocking Jewish Owner",
//         description:
//           "A man with apparent animosity towards Elon Musk was captured on camera vandalizing a Cybertruck in New York City. The perpetrator, identified as Michael Lewis, was later apprehended by the police.\nWhat Happened: Lewis was spotted defacing a Cybertruck with a …",
//         url: "https://biztoc.com/x/ed40281ca08b8c13",
//         urlToImage: "https://biztoc.com/cdn/ed40281ca08b8c13_s.webp",
//         publishedAt: "2025-03-16T18:27:38Z",
//         content:
//           "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]",
//       },
//       {
//         source: {
//           id: "the-times-of-india",
//           name: "The Times of India",
//         },
//         author: "TOI Trending Desk",
//         title:
//           "Internet slams Kim Kardashian’s Tesla photoshoot as anti-Musk protests gain momentum",
//         description:
//           "Kim Kardashian's recent Tesla-themed photoshoot has sparked backlash due to her association with Elon Musk amidst growing criticism of him. Fans criticized her on social media for glorifying Musk, whom many accuse of contributing negatively to society. Tesla …",
//         url: "https://timesofindia.indiatimes.com/etimes/trending/internet-slams-kim-kardashians-tesla-photoshoot-as-anti-musk-protests-gain-momentum/articleshow/119085145.cms",
//         urlToImage:
//           "https://static.toiimg.com/thumb/msid-119085160,width-1070,height-580,imgsize-41610,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         publishedAt: "2025-03-16T18:26:33Z",
//         content: "There are only 4 countries in the world starting with J",
//       },
//       {
//         source: {
//           id: null,
//           name: "Freerepublic.com",
//         },
//         author: "Semi-News/Semi-Satire",
//         title: "Is Vandalism & Violence Against Tesla Justified? [semi-satire]",
//         description:
//           "Over the past few months attacks against Tesla charging stations and dealerships have started to increase in frequency. In Tigard, Oregon a Tesla dealership has been repeatedly fired upon. In Lynnwood, a suburb of Seattle, Washington a Tesla dealership report…",
//         url: "https://freerepublic.com/focus/f-bloggers/4304662/posts",
//         urlToImage: null,
//         publishedAt: "2025-03-16T18:18:29Z",
//         content:
//           "Skip to comments.\r\nIs Vandalism &amp; Violence Against Tesla Justified? [semi-satire]Semi-News/Semi-Satire ^\r\n | 16 March 2025\r\n | John Semmens\r\nPosted on 03/16/2025 11:18:29 AM PDT by John Semmens\r\n… [+3398 chars]",
//       },
//     ])
//   );
// }

// export function saveArticle(article) {
//   // article is a result from the NewsAPI
//   return new Promise((resolve, reject) => {
//     resolve({
//       // these properties are given from the NewsAPI
//       source: {
//         id: null,
//         name: article.source.name,
//       },
//       author: article.author,
//       title: article.title,
//       description: article.description,
//       url: article.url,
//       urlToImage: article.urlToImage,
//       publishedAt: article.publishedAt,
//       content: article.content,
//     });
//   });
// }
