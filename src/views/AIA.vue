<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container md:px-36">
                <div class="vstack space-48 mx-18">
                    <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">ASEAN Investment Area Council</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The December 1995 ASEAN Summit endorsed the concept of the ASEAN Investment Area Council (AIA), which works towards lowering barriers for regional investment. By aiming for the establishment of a single ASEAN market and sustaining
                            the inflow of investment and reinvestment, AIA seeks to promote the dynamic development of ASEAN economies. Delegates will be challenged to come up with measures to ensure continued economic cooperation between ASEAN member states
                            to facilitate a competitive investment environment in ASEAN.</div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
                    <div class="vstack space-36 my-48 md:mx-128">
                        <div class="weight-500 text-36 text-center">The Question of Economic Integration in ASEAN</div>
                        <div class="text-20 text-justify" style="line-height: 1.2;">In fulfilling the ASEAN Economic Community Blueprint, ASEAN aims to achieve a single market and production base, which is characterised by the free flow of goods, services, and investments, as well as freer flow of capital and skills.
                            Economic integration of this scale would require not only the reduction of tariffs between the nations but also harmonised standards and procedures within the region. Economic integration of ASEAN not only serves to facilitate
                            trade within the region but also allows for the ease of trade of ASEAN as a market with other countries. In tackling the question of economic integration, delegates will evaluate the feasibility of potential solutions that are
                            specific to the ASEAN context, namely, Global Value Chains (GVCs), digital ftrade and Cross-border Trade (CBI).
                        </div>
                    </div>
    
                    <div class="vstack space-36 my-48 md:mx-128">
                        <div class="weight-500 text-36 text-center">The Question of Blue Economies in ASEAN</div>
                        <div class="text-20 text-justify" style="line-height: 1.2;">With a majority of ASEAN member states being coastal countries, discussions about the sustainability of ocean resources in the pursuit of economic growth - also known as a blue economy - are pertinent in the region. Currently, ASEAN
                            conservation efforts of its coastal ecosystems remain lacking, as destructive practices like overfishing and marine pollution continue to plague the region. As such, ASEAN should direct its focus towards sustainable economic growth
                            to attract more “green investments” that will help further its blue economy agenda. However, such efforts may pose disruptions to the economies of ASEAN nations as it requires the revamping of large sectors of marine activity.
                            Therefore, delegates will have to evaluate and make sustainable improvements to current marine practices, as well as come up with innovative ideas to raise the attractiveness of “green investment” prospects in ASEAN.
                        </div>
                    </div>
    
                    <div class="vstack mt-128 mx-18 space-64 md:px-128">
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
                            <img style="object-fit: cover" src="../static/AIA/ShianPei.webp" class="rounded-6 w-full lg:w-320 bg-gray-400 h-full mb-16">
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-18 mt-16 w-full lg:pl-64">
                                <div class="text-36 weight-500 m-0 p-0">Tan Shian Pei</div>
                                <div class="text-18" style="line-height: 1.2;">Shian Pei is a struggling J2 student, she spends what little free time she has playing Genshin Impact (she is a Hutao main!). One year ago, she wondered why she was hearing ”sleep deprived” and “overcommitted” during every MUN self-intro; one year later, she knew both of those sentiments all too well.</div>
                            </div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
    
                            <img style="object-fit: cover" src="../static/AIA/Henry.webp" class="rounded-6 unhidden lg:hidden w-full lg:w-320 bg-gray-400 h-full mb-16">
    
                            <div class="vstack align-start lg:align-end space-18 lg:mt-16 w-full lg:pr-64">
                                <div class="text-36 weight-500 m-0 p-0">Henry Lim Zhu Heng</div>
                                <div class="text-18 text-left lg:text-right" style="line-height: 1.2;">Having taken up H2 Art, Henry is regretting his choices of doing so as he is constantly dying over balancing his time allocated for his artworks, MUN and work from his other subjects. But for some reason, he finds validation and joy in struggling in life and over-committing to external projects. He is excited to be part of this conference and is looking forward to exercising his rights to suffer even more in life. :’)</div>
                            </div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <img style="object-fit: cover" src="../static/AIA/Henry.webp" class="rounded-6 hidden lg:unhidden w-full lg:w-320 bg-gray-400 h-full mb-16"/>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
                            <img style="object-fit: cover" src="../static/AIA/EeHsuan.webp" class="rounded-6 w-full lg:w-320 bg-gray-400 h-full mb-16">
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-18 mt-16 w-full lg:pl-64">
                                <div class="text-36 weight-500 m-0 p-0">Ming Ee Hsuan</div>
                                <div class="text-18" style="line-height: 1.2;">Ee Hsuan is a J1 student, who struggles to cope with the new rigour of Senior High life. She enjoys pop and R&B and looks up to anyone who is able to play the electric guitar. Despite having DHAP moved online, she hopes that delegates will be able to enjoy themselves all the same, and looks forward to meeting them!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
    components: {
        Footer
    }
}
</script>
