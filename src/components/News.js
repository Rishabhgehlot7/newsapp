import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    artical = [
        {
            "source": {
                "id": null,
                "name": "WZZM13.com"
            },
            "author": "13 ON YOUR SIDE Staff",
            "title": "MillerKnoll CEO facing backlash after telling employees to 'leave Pity City' - WZZM13.com",
            "description": "The video, which was released on social media, has been viewed millions of times.",
            "url": "https://www.wzzm13.com/article/news/local/millerknoll-ceo-criticized-after-viral-comments-to-employees/69-721c5175-92ef-4c57-9100-18334bf1c869",
            "urlToImage": "https://media.wzzm13.com/assets/WZZM/images/18163b0e-61b0-4473-968f-5e7aed121fe2/18163b0e-61b0-4473-968f-5e7aed121fe2_1140x641.jpg",
            "publishedAt": "2023-04-19T12:35:00Z",
            "content": "ZEELAND, Mich. The CEO of a West Michigan-based office furniture company is facing backlash after a clip went viral, admonishing employees for worrying about bonuses. \r\nIn the clip, MillerKnoll CEO A… [+1775 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Tierney Sneed",
            "title": "What to watch for with the Supreme Court and medication abortion on Wednesday - CNN",
            "description": "All eyes are on the Supreme Court as it could say at any moment how it will handle a blockbuster medication abortion case that landed on its doorstep late last week.",
            "url": "https://www.cnn.com/2023/04/19/politics/medication-abortion-what-to-watch-supreme-court/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230105123125-medication-abortion-process-wellness.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-19T12:05:00Z",
            "content": "All eyes are on the Supreme Court as it could say at any moment how it will handle a blockbuster medication abortion case that landed on its doorstep late last week. \r\nThe Supreme Court is deciding w… [+6499 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Taylor Nicioli",
            "title": "How to view this week's rare hybrid eclipse - CNN",
            "description": "Otherwise known as a hybrid eclipse, an annular-total solar eclipse will be viewable this week, depending on where you are in the world. This is the first one to occur in nearly 10 years.",
            "url": "https://www.cnn.com/2023/04/19/world/rare-hybrid-solar-eclipse-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230418122701-rare-hybrid-solar-eclipse-2013.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-19T11:43:00Z",
            "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nA hybrid solar eclipse the first of its kind in nearly… [+5601 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Melanie Zanona,Alayna Treene,Kristen Holmes",
            "title": "Trump and DeSantis battle for Florida endorsements as rivalry heats up - CNN",
            "description": "While Florida Gov. Ron DeSantis held a meet-and-greet on Capitol Hill Tuesday evening, former President Donald Trump and his team aimed to be one step ahead -- planning a dinner at his Mar-a-Lago resort with members of the Florida congressional delegation jus…",
            "url": "https://www.cnn.com/2023/04/19/politics/trump-desantis-endorsements-battle/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221029181537-ron-desantis-donald-trump-split.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-19T11:41:00Z",
            "content": "While Florida Gov. Ron DeSantis held a meet-and-greet on Capitol Hill Tuesday evening, former President Donald Trump and his team aimed to be one step ahead planning a dinner at his Mar-a-Lago resort… [+13601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Hugh Son",
            "title": "Morgan Stanley tops analysts’ expectations on better-than-expected trading results - CNBC",
            "description": "Morgan Stanley gets most of its revenue from wealth and investment management, steadier businesses that helped offset volatile trading and advisory results.",
            "url": "https://www.cnbc.com/2023/04/19/morgan-stanley-ms-earnings-1q-2023.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107067837-16535930452022-05-26t191919z_1841072160_rc26fu9pv1mh_rtrmadp_0_morganstanley-agm.jpeg?v=1681904141&w=1920&h=1080",
            "publishedAt": "2023-04-19T11:35:41Z",
            "content": "Morgan Stanley on Wednesday topped estimates for first quarter profit and revenue on better-than-expected trading results.\r\nHere's how the company did:\r\n<ul><li>Earnings of $1.70 per share, vs. $1.62… [+2830 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Bill Barnwell",
            "title": "2023 NFL mock draft with all trades: Deals for all 31 Round 1 picks - ESPN",
            "description": "How about a few NFL draft trades? We have proposals that include Lamar Jackson, Aaron Rodgers and another future Hall of Famer.",
            "url": "https://www.espn.com/nfl/draft2023/story/_/id/36173214/2023-nfl-mock-draft-all-trades-deals-all-31-round-1-picks-aaron-rodgers-lamar-jackson-aaron-donald",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0418%2Fr1160533_1296x729_16%2D9.jpg",
            "publishedAt": "2023-04-19T10:36:10Z",
            "content": "Time to share my favorite article of the offseason. You've read lots of 2023 mock drafts this spring. I feel pretty confident in saying none of them looks anything like this one. Most mock drafts don… [+45284 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Danny Lee",
            "title": "Tesla Shares Drop as Musk Cuts Prices Again Ahead of Earnings - Bloomberg",
            "description": "Tesla Inc. shares fell after the carmaker cut prices in the US for the second time this month, further demonstrating Elon Musk’s willingness to sacrifice profitability for demand.",
            "url": "https://www.bloomberg.com/news/articles/2023-04-19/tesla-drops-model-3-model-y-prices-on-eve-of-quarterly-earnings",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im.8.11vONIk/v1/1200x800.jpg",
            "publishedAt": "2023-04-19T10:20:55Z",
            "content": "Tesla Inc. shares fell after the carmaker cut prices in the US for the second time this month, further demonstrating Elon Musk’s willingness to sacrifice profitability for demand.\r\nThe Austin, Texas-… [+186 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jeremy Herb,Hannah Rabinowitz",
            "title": "Suspect in Pentagon leaks case to appear in court for hearing on whether he is kept in jail until trial - CNN",
            "description": "The Air National Guardsman accused of posting a trove of classified documents to social media will be back in court Wednesday for a hearing on whether he will be kept in jail.",
            "url": "https://www.cnn.com/2023/04/19/politics/jack-texeira-court-appearance/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230413145300-02-jack-teixeira.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-19T10:00:00Z",
            "content": "The Air National Guardsman accused of posting a trove of classified documents to social media will be back in court Wednesday for a hearing on whether he will be kept in jail.\r\nJack Teixeira, a 21-ye… [+2437 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Abe Asher",
            "title": "Maine shooting – live: Suspect named after four dead in house and interstate shooting spree - The Independent",
            "description": "Shooting in Yarmouth, Maine",
            "url": "https://www.independent.co.uk/news/world/americas/crime/yarmouth-maine-shooting-bowdoin-joseph-eaton-b2322374.html",
            "urlToImage": "https://static.independent.co.uk/2023/04/19/13/AF83B02B-F941-49EB-AB5B-D9AE21119A80.jpeg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-04-19T08:30:00Z",
            "content": "Sign up to our free US news bulletin sent straight to your inbox each weekday morning\r\nSign up to our free morning US email news bulletin\r\nA 34-year-old man has been arrested on suspicion of killing … [+6599 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Jennifer Peltz",
            "title": "How election lies, libel law were key to Fox defamation suit - The Associated Press",
            "description": "Fox News settled a major defamation lawsuit for $787.5 million on Tuesday, according to the voting machine company that sued the top cable news network. The settlement avoids a trial that could have shed additional light on former President Donald Trump's ele…",
            "url": "https://apnews.com/article/fox-news-dominion-lawsuit-trial-explainer-trump-fbd401a951905879d837a8860b3bec5e",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/e45fb132895c43aab0a1d65d95c73abd/3000.webp",
            "publishedAt": "2023-04-19T07:44:14Z",
            "content": "Fox News settled a major defamation lawsuit for $787.5 million on Tuesday, according to the voting machine company that sued the top cable news network.\r\nThe settlement avoids a trial that could have… [+4728 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Anthony Slater, Hunter Patterson",
            "title": "Warriors’ Draymond Green suspended for Game 3 vs. Kings - The Athletic",
            "description": "Green was ejected from Game 2 after being assessed the Flagrant Foul 2 for stepping on Domantas Sabonis in the fourth quarter.",
            "url": "https://theathletic.com/4427216/2023/04/19/warriors-draymond-green-suspended-game-3/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/04/18235310/GettyImages-1251759204-1024x683.jpg",
            "publishedAt": "2023-04-19T07:22:01Z",
            "content": "The NBA has suspended Golden State Warriors forward Draymond Green for Game 3 of the Western Conference first round against the Sacramento Kings for stepping on center Domantas Sabonis, the league an… [+3887 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nouran Salahieh",
            "title": "Recovery of Black teen allegedly shot by White homeowner after ringing wrong doorbell is a miracle, attorney says - CNN",
            "description": "A Black teenager who authorities say was shot by an 84-year-old White homeowner after going to the wrong Kansas City address has received a positive prognosis but still faces a long road to recovery as his family fights for justice in his case, according to h…",
            "url": "https://www.cnn.com/2023/04/19/us/kansas-city-ralph-yarl-shooting-wednesday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230419121044-rally-ralph-yarl-0418.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-19T07:01:00Z",
            "content": "A Black teenager who authorities say was shot by an 84-year-old White homeowner after going to the wrong Kansas City address has received a positive prognosis but still faces a long road to recovery … [+7125 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Coleman Spilde",
            "title": "'The Diplomat' Review: Smartest Netflix Show in Years Stars Killer Keri Russell - The Daily Beast",
            "description": "The streamer's political drama sees star Keri Russell diving back into complex character work as an ambassador trying to avoid a world war. You may want to silence your phone.",
            "url": "https://www.thedailybeast.com/obsessed/the-diplomat-review-smartest-netflix-show-in-years-stars-killer-keri-russell",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1681855368/230418-diplomat-tease_gip4by",
            "publishedAt": "2023-04-19T07:01:00Z",
            "content": "It is not, by any means, easy to dip into a show like The Diplomat, Netflixs imposing new political drama (premiering April 20). The series seems to pride itself on its density, making no effort to i… [+6831 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Elliot Smith",
            "title": "UK inflation rate surprises again with March figure holding above 10% - CNBC",
            "description": "U.K. inflation unexpectedly remained in double-digits in March as households continued to grapple with soaring food and energy bills.",
            "url": "https://www.cnbc.com/2023/04/19/uk-inflation-rate-surprises-again-with-march-figure-holding-above-10percent.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107202762-1677839435526-gettyimages-1247623523-UK_LSEG.jpeg?v=1681884613&w=1920&h=1080",
            "publishedAt": "2023-04-19T06:10:13Z",
            "content": "U.K. inflation unexpectedly remained in double-digits in March as households continued to grapple with soaring food and energy bills.\r\nThe consumer price index rose by an annual 10.1%, according to t… [+4480 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Investigation under way after 29 killed in Beijing hospital fire - Al Jazeera English",
            "description": "Preliminary findings suggest blaze at private Beijing Changfeng Hospital began when painting materials caught fire.",
            "url": "https://www.aljazeera.com/news/2023/4/18/fire-in-beijing-hospital-kills-21-state-media",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/04/AP23109150567496-1681881935.jpg?resize=1920%2C1440",
            "publishedAt": "2023-04-19T05:26:15Z",
            "content": "The death toll in a fire at a private Beijing hospital has risen to 29, authorities have said, with initial investigations suggesting the blaze was caused when flammable paint materials ignited durin… [+3010 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Arizona Sports"
            },
            "author": "",
            "title": "Devin Booker, Kevin Durant combine for 63 points in Suns’ Game 2 win over Clippers - Arizona Sports",
            "description": "Phoenix got big contributions from its two superstars Devin Booker and Kevin Durant, who combined for a total of 63 points in the Game 2 win.",
            "url": "https://arizonasports.com/story/3520585/devin-booker-kevin-durant-score-63-in-suns-game-2-win-over-clippers/",
            "urlToImage": "http://arizonasports.com/wp-content/uploads/2023/04/GettyImages-1483176492-e1681877692529.jpg",
            "publishedAt": "2023-04-19T04:36:00Z",
            "content": "The Phoenix Suns tied up their opening-round playoff series with the Los Angeles Clippers with a 123-109 win on Tuesday night at Footprint Center.\r\nPhoenix got big contributions from its two supersta… [+2037 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Kaylin Gillis: Driveway shooting suspect shows no remorse - police - BBC",
            "description": "A young woman was killed in New York state when her car pulled up in the wrong driveway.",
            "url": "https://www.bbc.com/news/world-us-canada-65319833",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/649F/production/_129395752_mediaitem129395578.jpg",
            "publishedAt": "2023-04-19T03:30:22Z",
            "content": "A man who allegedly shot and killed a 20-year-old woman in New York state as the car she was in mistakenly drove up the man's driveway has shown no remorse, police say.\r\nKaylin Gillis was in a car th… [+3016 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Armando Tinoco",
            "title": "Rachel McAdams On Possible Appearance In The ‘Mean Girls’ Movie Musical & Why She “Felt Guilty” Rejecting Roles During 2-Year Acting Break - Deadline",
            "description": "Rachel McAdams is talking about the possibility of making an appearance in the big-screen adaptation of Mean Girls the Musical. Although the star seems unsure as to how it would happen, she’s…",
            "url": "https://deadline.com/2023/04/rachel-mcadams-appearing-mean-girls-the-musical-movie-why-she-felt-guilty-rejecting-roles-acting-break-1235330377/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2023/04/rachel-mcadams.jpg?w=1024",
            "publishedAt": "2023-04-19T02:41:00Z",
            "content": "Rachel McAdams is talking about the possibility of making an appearance in the big-screen adaptation of Mean Girls the Musical. Although the star seems unsure as to how it would happen, she’s game to… [+1242 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Gabrielle Chung",
            "title": "Aaron Carter's Former Fiancée Melanie Martin Questions His Cause of Death After Autopsy Released - E! NEWS",
            "description": "Aaron Carter's former fiancée Melanie Martin spoke out after officials concluded that the late singer accidentally drowned in his bathtub from the effects of alprazolam and difluoroethane.",
            "url": "https://www.eonline.com/news/1371781/aaron-carters-former-fiancee-melanie-martin-questions-his-cause-of-death-after-autopsy-released",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20211022/rs_1200x1200-211122163758-1200-Aaron-Carter-and-Melanie-Martin-baby.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2023-04-19T02:26:00Z",
            "content": "Melanie Martinhas lingering questions about Aaron Carter's death. \r\nThe Los Angeles County Medical Examiner-Coroner recently concluded that the singer drowned in his bathtub on Nov. 5 at the age of 3… [+814 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Considered iPhone 15 With Lightning Port Before Swapping to USB-C - MacRumors",
            "description": "Early on in the iPhone 15 development process, Apple created a version that included a Lightning port, according to Apple leaker Unknownz21. In a...",
            "url": "https://www.macrumors.com/2023/04/18/apple-iphone-15-lightning-test/",
            "urlToImage": "https://images.macrumors.com/t/wNktlkyquC4rmTyGGJoqu4WXrcE=/2621x/article-new/2022/05/iPhone-15-to-Switch-From-Lightning-to-USB-C-in-2023-feature.jpg",
            "publishedAt": "2023-04-18T23:27:00Z",
            "content": "Early on in the iPhone 15 development process, Apple created a version that included a Lightning port, according to Apple leaker Unknownz21. In a tweet, Unknownz21 said that Apple tested an ‌iPhone 1… [+2387 chars]"
        }
    ]
    constructor() {
        super();

        console.log("hello i am contructor of news component");
        this.state = {
            artical: this.artical,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top headlines - MonkeyNews</h2>
                <div className="row my-5">

                    <div className="col-md-4">
                        <NewsItem title="MyTitle" discription="MyDisc" ImageUrl="" NewUrl=""/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" discription="MyDisc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" discription="MyDisc" />
                    </div>


                </div>
            </div>
        )
    }
}

export default News