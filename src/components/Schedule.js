/**
 * @class           Schedule
 * @description     Schedule accordion list component
 * @author          Michael Lungu
 */

import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    PixelRatio,
    ImageBackground,
    Linking,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Alert
} from 'react-native'

import Accordion from 'react-native-collapsible/Accordion';


class Line extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#e62b1e',
                width: 1 * PixelRatio.get(),
                height: this.props.height * PixelRatio.get()
            }}/>
        )
    }
}

class SocialSpeaker extends Component {
    constructor(props) {
        super(props)

    }

    fbIcon() {
        if (this.props.facebook === undefined) {
            return null
        }

        return (
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://facebook.com/' + this.props.facebook)}>
                <Image style={styles.iconSocial} source={icons.facebook}/>
            </TouchableWithoutFeedback>
        )
    }

    twitterIcon() {
        if (this.props.twitter === undefined) {
            return null
        }

        return (
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://twitter.com/' + this.props.twitter)}>
                <Image style={styles.iconSocial} source={icons.twitter}/>
            </TouchableWithoutFeedback>
        )
    }

    igIcon() {
        if (this.props.instagram === undefined) {
            return null
        }

        return (
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://instagram.com/' + this.props.instagram)}>
                <Image style={styles.iconSocial} source={icons.instagram}/>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <View style={styles.bodySocial}>
                {this.fbIcon()}
                {this.twitterIcon()}
                {this.igIcon()}
            </View>
        )
    }
}

export default class Schedule extends Component {
    constructor(props) {
        super(props)

        // init state
        this.state = {
            speakers: [],
            activeSections: []
        };
    }

    _renderSectionTitle = section => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _renderHeader = (section, index, isActive, sections) => {
        return (
            <View style={isActive ? styles.headerActive : styles.header}>

                {/* left */}
                <View style={styles.leftSegment}>

                    {/* red line*/}
                    <Line height={12}/>

                    {/* time */}
                    <View style={styles.time}>
                        <Text style={styles.time_text}>{section.time}</Text>
                    </View>

                    {/* red line */}
                    <Line height={(styles.header.height / PixelRatio.get()) - 19}/>
                </View>

                {/* right*/}
                <View style={styles.rightSegment}>
                    {/* top */}
                    <View style={styles.topSegment}>
                        <Text style={isActive ? styles.headerTextActive : styles.headerText}>{section.title}</Text>
                        <Image style={styles.icon} source={isActive ? icons.close : icons.open}/>
                    </View>

                    {/* bottom */}
                    <View style={styles.bottomSegment}>
                        <Text
                            style={isActive ? styles.subHeaderTextActive : styles.subHeaderText}>{section.speaker}</Text>
                    </View>
                </View>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.body}>{section.content}</Text>
                <ImageBackground style={styles.bodyImage} source={section.image}>
                    {/*<SocialSpeaker twitter={section.social.twitter}/>*/}
                </ImageBackground>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({activeSections});
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.programHeader}>
                    <View style={[styles.leftSegment, {paddingLeft: 11 * PixelRatio.get()}]}>
                        <Image source={icons.programme} style={styles.programIcon} imageStyle={{resizeMode: 'center'}}/>
                        <Line height={60 - 18}/>
                    </View>
                    <View style={styles.rightSegment}>
                        <Text style={styles.programHeaderText}>Programme</Text>
                        <Text style={styles.programHeaderDate}>{this.props.date}</Text>
                    </View>
                </View>

                <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}

                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />

                <View style={styles.programFooter}>
                    <View style={[styles.leftSegment]}>
                        <Line height={15}/>
                        <View style={styles.programFooterSquareContainer}>
                            <View style={styles.programFooterSquare}></View>
                        </View>

                    </View>
                    <View style={styles.rightSegment}>
                        <Text style={styles.programFooterText}>Thanks for watching!</Text>
                    </View>
                </View>
            </View>

        );
    }
}

var SECTIONS = [
    {
        content: "No content here",
        date: "Sun, 17 November 2018",
        image: require("../assets/image/eventmain.png"),
        order: 1,
        social: {
        },
        speaker: "09:00 - 10:30",
        time: "09:00",
        title: "Session One"
    },
    {
        content: 'Carryn Ortlepp is the Chief Operations Officer at a Cape Town-based leadership development consultancy called Lockstep. Under the Lockstep banner, she also facilitates a dedicated leadership program focussed on NGO leaders and her side hustle / passion project is speaker and presentation coaching.\n' +
        '\n' +
        'She’s passionate about connecting with people and being someone who makes a difference in the world. Something Carryn really enjoys is helping others communicate more effectively. In order to feed that passion, she has a side-gig supporting both individuals and organisations to speak and present in an authentic, accurate and aligned manner. She has also volunteered with TEDx for the last 6 years, assisting speakers in getting ready for the stage.\n' +
        '\n' +
        'Carryn believes strongly in the message she wants to share and feels TEDx is a great platform for this. Elaborating on what’s motivated her to be a TEDxCapeTown speaker she adds, “I’ve recently been reminded that it is only by actually stepping into challenges that we grow, and this is a huge challenge for me!”\n' +
        '\n' +
        'Aside from all the wonderful people she looks forward to meeting on this journey, Carryn looks forward to changing at least one person\'s way of thinking about how they communicate as well as the opportunity to learn and grow as a human being.',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-carryn-ortlepp.png"),
        order: 2,
        social: {
            twitter: "@carrynpeta"
        },
        speaker: "Carryn Ortlepp",
        time: "09:00",
        title: "TED, TEDx and why there's " + '\n' +
        "magic in the room",
    },
    {
        content: 'Gill Grose describes herself simply as a sixty-something serial volunteer who is a book, travel and tree lover, but there is far more to her story.\n' +
        '\n' +
        'When the ex-librarian retired more than eight years ago, Gill looked for something constructive to keep her occupied and through a series of events she landed up volunteering 30 minutes of her time twice a week to help children who were struggling at school.\n' +
        '\n' +
        'Gill however, soon realised that there was a much greater need and it wasn\'t long before she was volunteering four days a week at an under resourced primary school , and providing several hundreds of children aged 6 to 14 years, from largely disadvantaged backgrounds, access to books and advice about reading. An initiative that has been life changing for a significant number of her readers, as well as giving her life profound value.\n' +
        '\n' +
        'Unlike many of our speakers who applied for the opportunity to speak at our main event on Saturday, 17 November, Gill was nominated by a couchsurfer. We are very happy that she very bravely thought, what the heck… she\'d step up to the challenge!',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-gill-grose.png"),
        order: 3,
        speaker: "Gill Grose",
        time: "09:30",
        title: "For the love of books",
        social: {
        }
    },
    {
        content: "Penni Cox is a well-established psychologist spending the past decade working in a variety of contexts, from patient clinics to private practice, and the humanitarian sector. These roles in the world of psychology contributed to her vast experience in working with addiction, adolescents, as well as family and organisational systems. Additionally, Cox has devoted much of her time taking part in missions with humanitarian organizations, both in Africa and abroad including Liberia, Pakistan and Afghanistan. These missions supplied her with the opportunity to form part of health teams working with issues such as the Ebola outbreak and Xenophobia attacks.",
        date: "17 November 2018",
        image: require("../assets/image/speaker-penni-cox.png"),
        order: 4,
        speaker: "Penni Cox",
        time: "10:00",
        title: "Be curious. Be connected",
        social: {

        }
    },
    {
        content: 'The talented Preston Jongbloed loves people, something that shines through in every project he takes on whether it is public speaking or presenting on the radio. He currently dedicates much of his time to the Refocus Foundation, an organisation which specialises in working with youth at risk. This opportunity has provided him a platform to inspire troubled youth and prisoners, and change their lives for the better.\n' +
        '\n' +
        'When not working with youth, you’ll find the author of ‘Dream Again’ on CCFM’s airwaves — he’s the voice of ‘Monday Time to Decide’ — or at a speaking engagement.\n' +
        '\n' +
        'He’s frequently requested to be the keynote speaker at government and corporate events thanks to his natural ability to understand what truly drives conversation, and rare ability to connect with the heartbeats of people. More specifically he knows how to captivate the audience with his storytelling and leave them inspired and motivated.',
        date: "17 November 2018",
        image: require("../assets/image/speaker-preston-jongbloed.png"),
        order: 5,
        speaker: "Preston Jongbloed",
        time: "10:15",
        title: "Mentorship Rebooted",
        social: {
            twitter: "iamprestonj"
        }
    },
    {
        content: "No content here",
        date: "Sun, 17 November 2018",
        image: require("../assets/image/eventmain.png"),
        order: 6,
        social: {
        },
        speaker: "11:00 - 12:30",
        time: "11:00",
        title: "Session Two"
    },
    {
        content: 'Ndoni Mcunu is a PhD Candidate at the University of the Witwatersrand’s Global Change Institute and the Founder & CEO of Black Women in Science (BWIS), a registered non-profit organization which aims to deliver capacity development interventions that target young black women scientists and researchers.\n' +
        '\n' +
        'Ndoni is passionate about improving the lives of our youth, specifically young women. “I believe that education is a tool to enable improved and informed personal and professional decisions. It could also be a tool to empowering rural and disadvantaged young women to improve their livelihood, ” she says.\n' +
        '\n' +
        'With an arm’s length list of highly respected accolades including being selected as the top 200 Mail and Guardian Young South Africans in 2016 under the education sector; a Mandela Washington Fellow 2017; receiving an Honorary Award from the KwaZulu-Natal Province in the division of Science Research and Entrepreneurship given by the KZN Young Achievers Awards and eThekwini Municipality; and winning the Gagasi FM – SHERO Award for the Science and Technology category. She is also a Greenmatter Fellow for her academic research in climate change and agriculture and has been listed as the Top 50 most Inspiring Women in Tech in South Africa in 2017, which is an award issued by the Kingdom of the Netherlands and South Africa.',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-ndoni-mcunu.png"),
        order: 7,
        social: {
            twitter: "bwis_sa"
        },
        speaker: "Ndoni Mcunu",
        time: "11:00",
        title: "What does it mean for society when women walk away from science?"
    },
    {
        content: 'Adewale Adejumo, or Wale as he prefers to be called, is the Founder and Managing Director of Zasttra - one of the fastest growing online retail stores in South Africa.\n' +
        '\n' +
        'An entrepreneur, with a postgraduate degree in Marketing, Finance, Banking and Investment, has been recognised a number of times for his business acumen and \'forward-thinking\', this includes being selected as Destiny MAN\'s 40 under 40 Entrepreneurs (2017), The Young Independent Newspapers 100 Young Innovators in South Africa of 2017, and one of Nedbank\'s 25 young future change-makers in South Africa (2015). He\'s also been nominated to be in the Top 10 Black Tech & eCommerce Entrepreneurs in South Africa (2016), and was selected by Google Startup Grind as one of the Top 40 start-ups worldwide to present in San Francisco.',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-Adewale-Adejumo.png"),
        order: 7,
        social: {
            twitter: "Waleadejumo"
        },
        speaker: "Adewale Adejumo",
        time: "11:30",
        title: 'Embracing the only thing that is constant'
    },
    {
        content: 'Lauren Jacobs is a ‘Her’storian, a word she chooses to describe herself as she is passionate about discovering and sharing women’s stories, especially from the past.\n' +
        '\n' +
        'She began her career as a woman abuse counselor before spending the past decade as a Social Justice journalist. Her work focuses on gendercide, Female Genital Mutilation (FGM), child brides, female literacy, theology and gender equality, as well as human trafficking and female atonement rituals in Africa. Her debut historical fiction book Yehudit Chosen by God (2016), won the prestigious ‘Desmond Tutu - Gerrit Brand Award’ 2017 for its powerful stand on justice for women. Her second historical work Shelamzion, Queen of Israel was released in September 2018.\n' +
        '\n' +
        'She is an ordained minister, and she has a BA degree in Psychology and English, an Honours in Counselling Therapy and a Masters degree in Divinity.\n' +
        '\n' +
        'Lauren had a sense, that 2018 was the time to apply to be a TEDx speaker. Coupled with that, was growing the idea and narrative that she felt certain the world needs to hear right now. “The narrative that says, women’s lives matter, women\'s’ history matters, women’s stories really do matter.”\n' +
        '\n' +
        'She hopes the TEDxCapeTown speaker experience will be filled with personal growth and fresh vision for the future. She adds that, “I hope to see lives changed. I hope the audience will be deeply moved, especially women when they hear that their stories and their lives hold unique value and deserve to be preserved for future generations. We all are a living story and we will leave something behind that deserves re-telling.”',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-lauren jacobs.png"),
        order: 7,
        social: {
            twitter: "profuselyprofound"
        },
        speaker: "Lauren Jacobs",
        time: "11:45",
        title: 'A Forgotten History: Where Are our Women?'
    },
    {
        content: 'Tegan is an adventurer, avid cyclist, comic artist and the creator of Unclipped Adventure comics. She first tried her hand at drawing as a way to win a touring bike and gear in a contest. Little did she know, that by winning the bike her life was destined for a dramatic change that would set her off riding it across the globe.\n' +
        '\n' +
        'She recorded her travels in a comic blog, which led to a growing following, and moreover, to Tegan creating a brand of comic stories about her often disaster-filled endurance adventures during the next four years. These trips included extensive travels through Southern Africa, as well as completing the New Zealand Epic (a solo 1400 mile triathlon) to raise funds for charity. \n' +
        '\n' +
        'The freelance cartoonist regards adventure as a privilege, which urges one to see the world differently, and furthermore realise the possibilities for creating one’s own freedom and happiness. Tegan now spends her days creatively exploring ways to live with different kinds of courage; she is currently working on building her career as a cartoonist and using the platform to help sponsor her future groundbreaking endeavours.',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-tegan-phillips.png"),
        order: 7,
        social: {
            twitter: "Unclippd"
        },
        speaker: "Tegan Phillips",
        time: "12:00",
        title: 'The funny thing about courage'
    },
    {
        content: "No content here",
        date: "Sun, 17 November 2018",
        image: require("../assets/image/eventmain.png"),
        order: 6,
        social: {
        },
        speaker: "14:00 - 15:30",
        time: "14:00",
        title: "Session Three"
    },
    {
        content: 'Dr Nicki Spies is a corporate coach, trainer, facilitator, gender discourse analyst and narrative practitioner. She’s inspired by observing positive change in individuals, seeing them own who they are and being more comfortable with their sexuality and in their relationships. In her PhD research she focussed on how we construct our sexuality and how to navigate sexually unhappy marriages. With this in mind Nicki is excited about the platform TEDxCapeTown provides to start new conversations around sexuality, a space for audiences to ‘Pause & Effect’ how this can benefit and support relationships.',
        image: require("../assets/image/speaker-nicki-spies.png"),
        order: 6,
        social: {
            instagram: "nicki.spies"
        },
        speaker: "Nicki Spies",
        time: "14:00",
        title: "Sex. Let's start the conversation"
    },
    {
        content: 'Jared Molko is an ex-Googler who has worked across Africa, Europe and the Middle East, where he had a variety of roles. During his seven-year tenure, he completed a Masters Degree in Analytical Psychology. He\'s now back in South Africa and focusing his attention on the intersection between psychology and technology, with the aim of improving mass job placement and skill development for entry-level workers.\n' +
        '\n' +
        'Jared is a well-acclaimed speaker who has spoken on behalf of Google around the world, published numerous articles, and has had the honour of speaking at the first TEDxSoweto main event. He\'s now on a crusade to raise awareness for the challenges we all face with AI and automation, to ensure we\'re well prepared to not only survive, but to thrive in this new technological age.',
        image: require("../assets/image/speaker-jared-molko.png"),
        order: 6,
        social: {
            twitter: "Jared_Molko"
        },
        speaker: "Jared Molko",
        time: "14:30",
        title: "Remaining relevant in an AI world"
    },
    {
        content: 'Recognised as one of the 100 Brightest Young Minds in Africa, Cindy Mkaza-Siboto is the co-founder of Emagqabini Education Academy, an educational non-profit organisation operating in Site B Khayelitsha.\n' +
        '\n' +
        'The organisation - which was established to assist young people from the township through academic support, mentorship and career planning- started off assisting 15 learners and today supports more than 100 young people.\n' +
        '\n' +
        'The opportunity to speak at this year’s TEDxCapeTown main event is an exciting one for Cindy, who not only aims to inspire more young people to see the impact of the smallest actions, but hopes to spread the message far and wide that we can all be part of creating change in our communities. A sentiment we can all learn from and adopt.',
        image: require("../assets/image/speaker-cindy-mkaza-siboto.png"),
        order: 6,
        social: {
            twitter: "Emagqabini"
        },
        speaker: "Cindy Mkaza-Siboto",
        time: "15:00",
        title: "Averting disaster through a simple homegrown solution"
    },
    {
        content: 'Verity is a former singer/songwriter who became one of the forerunners of crowdfunding in South Africa when she sold 2000 copies of her album that ‘didn’t exist’ in 2006. As a result, she is a sought-after speaker on innovation and the power of thinking differently, and now owns and runs TAP Results where she’s a full-time speaker and facilitator.\n' +
        '\n' +
        'As a strategic thinking facilitator and team alignment expert, she works with organisations and teams across South Africa to help align strategic direction, solve old problems and uncover new ideas. Above all, she is passionate about changing South Africa, one idea at a time.',
        image: require("../assets/image/speaker-verity-price.png"),
        order: 6,
        social: {
            twitter: "helloverity"
        },
        speaker: "Verity Price",
        time: "15:15",
        title: "Does convenience kill creativity?"
    },
    {
        content: "No content here",
        date: "Sun, 17 November 2018",
        image: require("../assets/image/eventmain.png"),
        order: 6,
        social: {
        },
        speaker: "16:00 - 17:00",
        time: "16:00",
        title: "Session Four"
    },
    {
        content: 'Sam Beckbessinger is a writer, user-experience designer and entrepreneur who is on a quest to help the emerging middle class understand how to take charge of their finances. Author of ‘Manage Your Money Like a F*cking Grown Up’, she is also a co-founder of Lettuce, an app that wants to make managing your money as simple as making toast. She also lectures extensively on personal finances and designing for behaviour change, and writes for television.\n' +
        '\n' +
        'Being so passionate about helping people feel more in control of their money (and as a result more in control of their lives) she’s excited to be using the TEDxCapeTown stage and platform to reach a wider audience while at the same time refining her message and story.',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-Sam.png"),
        order: 6,
        social: {
            twitter: "beckbessinger"
        },
        speaker: "Sam Beckbessinger",
        time: "16:00",
        title: "How to Buy a Private Island"
    },
    {
        content: 'Ruth Hall, a Professor at the Institute of Poverty, Land and Agrarian Studies at the University of the Western Cape, is an accomplished academic whose research on land and agrarian reform in South Africa spans 23 years.\n' +
        '\n' +
        'Passionate about social justice, Ruth says her mission is “to make land reform sexy” , and is excited about the opportunity to present her case on the matter at TEDxCapeTown’s main event on Saturday, 17 November 2018.\n' +
        '\n' +
        'With four university degrees under her belt (including a Doctor of Philosophy in Politics from the University of Oxford), three postgraduate dissertations on land reform in South Africa, her doctoral work has influenced the development of South African land redistribution policy and practice. She is now an expert advisor to President Cyril Ramaphosa to reshape policy on land and respond to the controversial question of land expropriation without compensation.\n' +
        '\n' +
        'There’s no doubt that Ruth is well-versed on the topic. She will share amazing insights and a vision for how land reform can reshape the country for the benefit of everyone.',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-ruth-Hall.png"),
        order: 6,
        social: {
            twitter: "RuthHallPLAAS"
        },
        speaker: "Ruth Hall",
        time: "16:20",
        title: "Let's redistribute the land"
    },
    {
        content: 'Richard Mulholland is an ex-Rock ‘n Roll roadie, entrepreneur and renowned speaker who has presented his ideas in many countries including Canada, Puerto Rico, UK, USA, Germany, Kenya and Pakistan.\n' +
        '\n' +
        'Not only is he the co-founder of TalkDrawer and Missing Link, Richard has also authored two books, has been voted Destiny Man top 40 under 40, and is one of Mail and Guardian\'s top 300 South Africans to take to lunch.\n' +
        '\n' +
        'Passionate about problem-solving and spreading ideas, Richard spends his time doing what he loves - activating his audience. When he’s not doing that he can be found coaching many top CEOs and TED speakers.',
        date: "Sun, 17 November 2018",
        image: require("../assets/image/speaker-rich-mulholland.png"),
        order: 6,
        social: {
            twitter: "RichMulholland"
        },
        speaker: "Rich Mulholland",
        time: "16:40",
        title: "Steps vs. Leaps"
    },

];

const icons = {
    open: require('../assets/icn/back-on-dark.png'),
    close: require('../assets/icn/back-black-left.png'),
    programme: require('../assets/image/pause_effect-icon.png'),
    facebook: require('../assets/icn/social-fb.png'),
    twitter: require('../assets/icn/social-tweet.png'),
    instagram: require('../assets/icn/social-instagram.png')
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    programHeader: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'flex-end',
        height: 60 * PixelRatio.get(),
        paddingTop: 21 * PixelRatio.get(),
        backgroundColor: '#171717',
    },
    programIcon: {
        height: 18 * PixelRatio.get(),
        width: 18 * PixelRatio.get(),
        resizeMode: 'contain'
    },
    programHeaderText: {
        fontFamily: 'HelveticaNeueBold',
        color: 'white',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
        // lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.39),
    },
    programHeaderDate: {
        fontFamily: 'HelveticaNeueBold',
        color: '#e62b1e',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.21),

    },
    header: {
        flexDirection: 'row',
        height: 60 * PixelRatio.get(),
        backgroundColor: '#171717',
        paddingHorizontal: 10 * PixelRatio.get(),
    },
    headerActive: {
        flexDirection: 'row',
        height: 60 * PixelRatio.get(),
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 10 * PixelRatio.get(),
    },
    rightSegment: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5 * PixelRatio.get(),
    },
    leftSegment: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    time: {
        flex: 1,
        flexDirection: 'column',
        height: 7 * PixelRatio.get(),
        width: 20 * PixelRatio.get(),
        backgroundColor: '#e62b1e',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7
    },
    time_text: {
        color: '#fff',
        fontFamily: 'HelveticaNeueBold',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        letterSpacing: 0,
    },
    topSegment: {
        paddingTop: 10 * PixelRatio.get(),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },
    bottomSegment: {
        paddingTop: 4 * PixelRatio.get(),
        flexDirection: 'row',
    },
    headerText: {
        fontFamily: 'HelveticaNeueBold',
        flexWrap: 'wrap',
        color: '#fff',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.31),
    },
    subHeaderText: {
        fontFamily: 'HelveticaNeueMedium',
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        color: '#fff',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
    },
    headerTextActive: {
        fontFamily: 'HelveticaNeueBold',
        flexWrap: 'wrap',
        color: '#e62b1e',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.31),
    },
    subHeaderTextActive: {
        fontFamily: 'HelveticaNeueMedium',
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        color: '#000',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
    },
    icon: {
        marginLeft: 'auto',
        left: 5 * PixelRatio.get(),
    },
    spacer: {
        padding: 5 * PixelRatio.get()
    },
    content: {
        backgroundColor: '#f8f8f8',
        flex: 1,
        flexDirection: 'column',

    },
    body: {
        fontFamily: 'HelveticaNeueMedium',
        paddingLeft: 35 * PixelRatio.get(),
        paddingRight: 15 * PixelRatio.get(),
        color: '#000',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19)
    },
    bodySocial: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 9.5 * PixelRatio.get(),
        marginRight: 15 * PixelRatio.get(),
    },
    bodyImage: {
        width: '100%',
        height: 150 * PixelRatio.get(),
        paddingTop: 9 * PixelRatio.get(),
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'

    },
    iconSocial: {
        height: 17.5 * PixelRatio.get(),
        width: 17.5 * PixelRatio.get(),
        resizeMode: 'contain',
        marginLeft: 12.5 * PixelRatio.get()

    },
    programFooter: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10 * PixelRatio.get(),
        backgroundColor: 'black',
    },
    programFooterSquareContainer: {
        width: 20 * PixelRatio.get(),
        alignItems: 'center',
    },
    programFooterSquare: {
        height: 7 * PixelRatio.get(),
        width: 7 * PixelRatio.get(),
        backgroundColor: '#e62b1e'
    },
    programFooterText: {
        marginTop: 15 * PixelRatio.get(),
        fontFamily: 'HelveticaNeueMedium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(8),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.21),
        color: 'white'

    }
})