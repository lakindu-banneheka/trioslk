// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Calendar, Clock, Users } from "lucide-react"
// import { motion } from "@/components/motion"

// export default function CoursesPage() {
//   return (
//     <div className="flex flex-col w-full">
//       {/* Hero Section */}
//       <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image src="/images/courses-hero.png" alt="Academy Courses" fill className="object-cover" priority />
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
//               Our Courses
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-lg md:text-xl text-gray-200"
//             >
//               Explore our comprehensive range of courses designed to help you develop your creative skills
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Course Categories */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-4">
//             <motion.button
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
//             >
//               All Courses
//             </motion.button>
//             <motion.button
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.1 }}
//               className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
//             >
//               Photography
//             </motion.button>
//             <motion.button
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.2 }}
//               className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
//             >
//               Event Planning
//             </motion.button>
//             <motion.button
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.3 }}
//               className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
//             >
//               Design
//             </motion.button>
//             <motion.button
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.4 }}
//               className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
//             >
//               Marketing
//             </motion.button>
//           </div>
//         </div>
//       </section>

//       {/* Courses Grid */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
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
//                     <Link href="/trios-academy/course-details">
//                       <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
//                     </Link>
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
//                     <Link href="/trios-academy/course-details">
//                       <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
//                     </Link>
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
//                     <Link href="/trios-academy/course-details">
//                       <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
//                     </Link>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Course 4 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               whileHover={{ y: -10 }}
//             >
//               <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
//                 <div className="relative h-48">
//                   <Image
//                     src="/images/digital-marketing-course.png"
//                     alt="Digital Marketing Course"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-2">Digital Marketing for Creatives</h3>
//                   <p className="text-gray-600 mb-4">
//                     Learn how to market your creative services online, build your bran\
