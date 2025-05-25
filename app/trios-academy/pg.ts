// <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image src="/images/academy-hero.png" alt="Trios Academy" fill className="object-cover" priority />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
//         </div>
//         <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
//           <div className="max-w-3xl">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-4xl md:text-5xl font-bold text-white mb-6"
//             >
//               Trios Academy
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-lg md:text-xl text-gray-200"
//             >
//               Educational programs and courses to develop your creative skills. Learn from industry professionals and
//               take your abilities to the next level.
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Courses Overview */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl md:text-4xl font-bold mb-4"
//             >
//               Our Courses
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-gray-600 max-w-2xl mx-auto"
//             >
//               Explore our range of courses designed to help you develop your skills and advance your career
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Course 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ y: -10 }}
//             >
//               <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
//                 <div className="relative h-48">
//                   <Image src="/images/photography-course.png" alt="Photography Course" fill className="object-cover" />
//                   <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     Popular
//                   </div>
//                 </div>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-2">Professional Photography</h3>
//                   <p className="text-gray-600 mb-4">
//                     Master the art of photography with our comprehensive course covering everything from camera basics
//                     to advanced techniques.
//                   </p>
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Calendar className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Next Intake: June 15, 2023</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Duration: 8 Weeks</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Users className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Class Size: Maximum 12 Students</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-red-600">$599</span>
//                     <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Course 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               whileHover={{ y: -10 }}
//             >
//               <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
//                 <div className="relative h-48">
//                   <Image
//                     src="/images/event-planning-course.png"
//                     alt="Event Planning Course"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-2">Event Planning & Management</h3>
//                   <p className="text-gray-600 mb-4">
//                     Learn how to plan and execute successful events, from concept development to on-the-day
//                     coordination.
//                   </p>
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Calendar className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Next Intake: July 10, 2023</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Duration: 10 Weeks</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Users className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Class Size: Maximum 15 Students</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-red-600">$749</span>
//                     <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Course 3 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               whileHover={{ y: -10 }}
//             >
//               <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
//                 <div className="relative h-48">
//                   <Image
//                     src="/images/graphic-design-course.png"
//                     alt="Graphic Design Course"
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     New
//                   </div>
//                 </div>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-2">Graphic Design Fundamentals</h3>
//                   <p className="text-gray-600 mb-4">
//                     Develop your design skills with our hands-on course covering design principles, typography, color
//                     theory, and industry-standard software.
//                   </p>
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Calendar className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Next Intake: August 5, 2023</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Duration: 12 Weeks</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Users className="h-4 w-4 mr-2 text-red-600" />
//                       <span>Class Size: Maximum 10 Students</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-red-600">$899</span>
//                     <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>

//           <div className="text-center mt-12">
//             <Link href="/trios-academy/courses">
//               <Button className="bg-red-600 hover:bg-red-700 group">
//                 <span>View All Courses</span>
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Trios Academy</h2>
//               <p className="text-gray-600 mb-8">
//                 At Trios Academy, we are committed to providing high-quality education that prepares you for success in
//                 the creative industry. Here's what sets us apart:
//               </p>

//               <div className="space-y-6">
//                 <div className="flex">
//                   <div className="mr-4 flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
//                       <Users className="h-6 w-6 text-red-600" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold mb-2">Industry Expert Instructors</h3>
//                     <p className="text-gray-600">
//                       Learn from professionals with years of experience in their respective fields, providing real-world
//                       insights and practical knowledge.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex">
//                   <div className="mr-4 flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="h-6 w-6 text-red-600"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold mb-2">Hands-On Learning</h3>
//                     <p className="text-gray-600">
//                       Our courses emphasize practical, hands-on experience, allowing you to apply what you learn in
//                       real-world scenarios.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex">
//                   <div className="mr-4 flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="h-6 w-6 text-red-600"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold mb-2">Industry-Relevant Curriculum</h3>
//                     <p className="text-gray-600">
//                       Our courses are regularly updated to reflect current industry trends, technologies, and best
//                       practices.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex">
//                   <div className="mr-4 flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
//                       <GraduationCap className="h-6 w-6 text-red-600" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold mb-2">Small Class Sizes</h3>
//                     <p className="text-gray-600">
//                       We limit our class sizes to ensure personalized attention and support for each student throughout
//                       their learning journey.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative h-[500px] rounded-lg overflow-hidden"
//             >
//               <Image src="/images/academy-classroom.png" alt="Trios Academy Classroom" fill className="object-cover" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Workshops */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl md:text-4xl font-bold mb-4"
//             >
//               Upcoming Workshops
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-gray-600 max-w-2xl mx-auto"
//             >
//               Join our short-term workshops to develop specific skills and expand your creative toolkit
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Workshop 1 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="group"
//             >
//               <Card className="overflow-hidden transition-all group-hover:shadow-lg h-full">
//                 <div className="relative h-48">
//                   <Image
//                     src="/images/portrait-workshop.png"
//                     alt="Portrait Photography Workshop"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <CardContent className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-xl font-bold">Portrait Photography Masterclass</h3>
//                     <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">1 Day</div>
//                   </div>
//                   <p className="text-gray-600 mb-4">
//                     Master the art of portrait photography with lighting techniques, posing, and post-processing tips.
//                   </p>
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Calendar className="h-4 w-4 mr-2 text-red-600" />
//                       <span>June 25, 2023</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="h-4 w-4 mr-2 text-red-600" />
//                       <span>9:00 AM - 5:00 PM</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="h-4 w-4 mr-2 text-red-600"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                         />
//                       </svg>
//                       <span>Trios Studio, Colombo</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-red-600">$149</span>
//                     <Button className="bg-red-600 hover:bg-red-700 group-hover:bg-red-700">Register Now</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Workshop 2 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="group"
//             >
//               <Card className="overflow-hidden transition-all group-hover:shadow-lg h-full">
//                 <div className="relative h-48">
//                   <Image
//                     src="/images/social-media-workshop.png"
//                     alt="Social Media Marketing Workshop"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <CardContent className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-xl font-bold">Social Media Marketing for Creatives</h3>
//                     <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">2 Days</div>
//                   </div>
//                   <p className="text-gray-600 mb-4">
//                     Learn how to effectively market your creative services on social media platforms and build your
//                     brand.
//                   </p>
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Calendar className="h-4 w-4 mr-2 text-red-600" />
//                       <span>July 8-9, 2023</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="h-4 w-4 mr-2 text-red-600" />
//                       <span>10:00 AM - 4:00 PM</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="h-4 w-4 mr-2 text-red-600"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                         />
//                       </svg>
//                       <span>Trios Academy, Colombo</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-red-600">$199</span>
//                     <Button className="bg-red-600 hover:bg-red-700 group-hover:bg-red-700">Register Now</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Workshop 3 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="group"
//             >
//               <Card className="overflow-hidden transition-all group-hover:shadow-lg h-full">
//                 <div className="relative h-48">
//                   <Image
//                     src="/images/video-editing-workshop.png"
//                     alt="Video Editing Workshop"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <CardContent className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-xl font-bold">Video Editing Essentials</h3>
//                     <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">3 Days</div>
//                   </div>
//                   <p className="text-gray-600 mb-4">
//                     Get started with video editing using industry-standard software and learn essential techniques.
//                   </p>
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Calendar className="h-4 w-4 mr-2 text-red-600" />
//                       <span>July 22-24, 2023</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="h-4 w-4 mr-2 text-red-600" />
//                       <span>9:30 AM - 3:30 PM</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="h-4 w-4 mr-2 text-red-600"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                         />
//                       </svg>
//                       <span>Trios Digital Lab, Colombo</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-red-600">$299</span>
//                     <Button className="bg-red-600 hover:bg-red-700 group-hover:bg-red-700">Register Now</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>

//           <div className="text-center mt-12">
//             <Link href="/trios-academy/workshops">
//               <Button className="bg-red-600 hover:bg-red-700 group">
//                 <span>View All Workshops</span>
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Student Success Stories */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl md:text-4xl font-bold mb-4"
//             >
//               Student Success Stories
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-gray-600 max-w-2xl mx-auto"
//             >
//               Hear from our graduates about how Trios Academy helped them achieve their goals
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Success Story 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <Card className="p-6 h-full">
//                 <CardContent className="p-0">
//                   <div className="flex flex-col h-full">
//                     <div className="flex items-center mb-6">
//                       <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
//                         <Image src="/images/student-1.png" alt="Student" fill className="object-cover" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold">Amal Perera</h4>
//                         <p className="text-sm text-gray-500">Photography Course Graduate</p>
//                         <p className="text-sm text-red-600">Now a Professional Wedding Photographer</p>
//                       </div>
//                     </div>
//                     <blockquote className="flex-1 mb-4">
//                       <p className="text-gray-700">
//                         "The photography course at Trios Academy transformed my hobby into a successful career. The
//                         hands-on approach and mentorship from industry professionals gave me the skills and confidence
//                         to launch my own wedding photography business."
//                       </p>
//                     </blockquote>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Success Story 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <Card className="p-6 h-full">
//                 <CardContent className="p-0">
//                   <div className="flex flex-col h-full">
//                     <div className="flex items-center mb-6">
//                       <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
//                         <Image src="/images/student-2.png" alt="Student" fill className="object-cover" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold">Nisha Fernando</h4>
//                         <p className="text-sm text-gray-500">Event Planning Course Graduate</p>
//                         <p className="text-sm text-red-600">Founded Her Own Event Company</p>
//                       </div>
//                     </div>
//                     <blockquote className="flex-1 mb-4">
//                       <p className="text-gray-700">
//                         "The event planning course provided me with a solid foundation in all aspects of event
//                         management. The practical projects and industry connections helped me establish my own event
//                         planning company, which is now thriving."
//                       </p>
//                     </blockquote>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Success Story 3 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Card className="p-6 h-full">
//                 <CardContent className="p-0">
//                   <div className="flex flex-col h-full">
//                     <div className="flex items-center mb-6">
//                       <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
//                         <Image src="/images/student-3.png" alt="Student" fill className="object-cover" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold">Rajiv Mendis</h4>
//                         <p className="text-sm text-gray-500">Graphic Design Course Graduate</p>
//                         <p className="text-sm text-red-600">Senior Designer at Leading Agency</p>
//                       </div>
//                     </div>
//                     <blockquote className="flex-1 mb-4">
//                       <p className="text-gray-700">
//                         "The graphic design course at Trios Academy was comprehensive and up-to-date with industry
//                         standards. The portfolio I developed during the course helped me secure a position at a leading
//                         design agency in Colombo."
//                       </p>
//                     </blockquote>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Facilities */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl md:text-4xl font-bold mb-4"
//             >
//               Our Facilities
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-gray-600 max-w-2xl mx-auto"
//             >
//               Explore our state-of-the-art facilities designed to provide an optimal learning environment
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Facility 1 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <div className="relative h-80">
//                 <Image
//                   src="/images/photo-studio.png"
//                   alt="Photography Studio"
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
//               <div className="absolute bottom-0 left-0 p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">Professional Photography Studio</h3>
//                 <p className="text-gray-200 text-sm">
//                   Fully equipped studio with professional lighting equipment, backdrops, and props for photography
//                   classes and student projects.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Facility 2 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <div className="relative h-80">
//                 <Image
//                   src="/images/computer-lab.png"
//                   alt="Digital Lab"
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
//               <div className="absolute bottom-0 left-0 p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">Digital Design Lab</h3>
//                 <p className="text-gray-200 text-sm">
//                   Modern computer lab with the latest design software, high-performance workstations, and digital
//                   tablets for graphic design and video editing courses.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Facility 3 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <div className="relative h-80">
//                 <Image
//                   src="/images/classroom.png"
//                   alt="Classroom"
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
//               <div className="absolute bottom-0 left-0 p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">Modern Classrooms</h3>
//                 <p className="text-gray-200 text-sm">
//                   Comfortable, well-equipped classrooms with multimedia facilities for theoretical learning and group
//                   discussions.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Facility 4 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <div className="relative h-80">
//                 <Image
//                   src="/images/student-lounge.png"
//                   alt="Student Lounge"
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
//               <div className="absolute bottom-0 left-0 p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">Student Lounge & Collaboration Space</h3>
//                 <p className="text-gray-200 text-sm">
//                   Relaxed environment for students to collaborate, network, and work on projects outside of class hours.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-red-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl md:text-4xl font-bold mb-6"
//           >
//             Ready to Start Your Creative Journey?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-xl mb-8 max-w-2xl mx-auto"
//           >
//             Enroll in our courses today and take the first step towards a successful career in the creative industry.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             <Link href="/trios-academy/courses">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-white border-white hover:bg-white hover:text-red-600 group"
//               >
//                 <span>Browse Courses</span>
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//             <Link href="/trios-academy/apply">
//               <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 group">
//                 <span>Apply Now</span>
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>