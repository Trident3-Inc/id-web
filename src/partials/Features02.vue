<template>
  <section class="relative">

    <!--

      Certificates, licenses, etc.

      E3E encryption
      No more passwords
      No more spam or phishing

      Trustless & Decentralized


    -->

    <!-- Particles animation -->
    <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
      <Particles class="absolute inset-0 -z-10" :quantity="6" :staticity="30" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-16 md:pt-32">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-8 md:pb-8">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Reimagining Identity</h2>
          <p class="text-lg text-slate-400">
            We have too many identities: licenses, usernames, passports, badges, social media handles...
            <b>What if we could have just one?</b>
          </p>
        </div>

        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-20">
          <!-- Blurred shape -->
          <div class="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stop-color="#6366F1" />
                  <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#bs2-a)" fill-rule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)" />
            </svg>
          </div>
          <!-- Grid -->
          <Highlighter class="grid md:grid-cols-12 gap-6 group">
            <!-- Box #1 -->
            <div class="md:col-span-12" data-aos="fade-down">
              <HighlighterItem>
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <!-- Blurred shape -->
                    <div class="absolute right-0 top-0 blur-2xl" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="342" height="393">
                        <defs>
                          <linearGradient id="bs-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                            <stop offset="0%" stop-color="#6366F1" />
                            <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#bs-a)" fill-rule="evenodd" d="m104 .827 461 369-284 58z" transform="translate(0 -112.827)" opacity=".7" />
                      </svg>
                    </div>
                    <!-- Radial gradient -->
                    <div class="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square" aria-hidden="true">
                      <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
                      <div class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
                    </div>


                    <!-- Text -->
                    <div class="md:max-w-[600px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                      <div class="mb-5">
                        <div>
                          <h3 class="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Security as a First Principle</h3>
                          <p class="text-slate-400">
                            With T3id, you'll never need to worry about passwords, spam or phishing again.
                            Encrypt your data with E3E encryption and <b>trust no one but yourself.</b>
                          </p>
                        </div>
                      </div>
                      <div>
                        <a class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="#0">
                          <span class="relative inline-flex items-center">
                            Build securely with T3id <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 md:h-auto overflow-hidden">
                      <img class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0 md:translate-x-0" src="../images/feature-image-01.png" width="504" height="400" alt="Feature 01">
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #2 -->
            <div class="md:col-span-7" data-aos="fade-down">
              <HighlighterItem>
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <div class="flex flex-col">
                    <!-- Radial gradient -->
                    <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                      <div class="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                    </div>
                    <!-- Text -->
                    <div class="md:max-w-[500px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                      <div>
                        <h3 class="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">One ID to Rule Them All</h3>
                        <p class="text-slate-400">Bring your identity with you. Add certifications, licenses, degrees, and more to verify your credentials anywhere.</p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                      <img class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src="../images/feature-image-02.png" width="536" height="230" alt="Feature 02">
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #3 -->
            <div class="md:col-span-5" data-aos="fade-down">
              <HighlighterItem>
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <div class="flex flex-col">
                    <!-- Radial gradient -->
                    <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                      <div class="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                    </div>
                    <!-- Text -->
                    <div class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                      <div>
                        <h3 class="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Truly Trustless</h3>
                        <p class="text-slate-400">T3id is operated fully on-chain, so every interaction is trustless & decentralized.</p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                      <img class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src="../images/feature-image-03.png" width="230" height="230" alt="Feature 03">
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </Highlighter>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem.vue'

export default {
  name: 'Features02',
  components: {
    Particles,
    Highlighter,
    HighlighterItem,
  },  
}
</script>