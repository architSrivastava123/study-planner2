import { motion } from 'framer-motion';
import { Trophy, Star, Book, Target, Award, Zap } from 'lucide-react';
import { useState } from 'react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  avatar: string;
  badges: string[];
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  progress: number;
  icon: string;
}

const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    username: "StarLearner",
    points: 2500,
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    badges: ["🏆", "⭐", "📚"]
  },
  {
    rank: 2,
    username: "BrainQuester",
    points: 2350,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    badges: ["🎯", "⚡", "📖"]
  },
  {
    rank: 3,
    username: "KnowledgeSeeker",
    points: 2200,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    badges: ["🌟", "💫", "📝"]
  }
];

const challengesData: Challenge[] = [
  {
    id: "1",
    title: "Complete 3 Study Sessions",
    description: "Study for at least 25 minutes each session",
    difficulty: "Easy",
    points: 100,
    progress: 66,
    icon: "📘"
  },
  {
    id: "2",
    title: "Master Advanced Topics",
    description: "Complete all exercises in Chapter 5",
    difficulty: "Hard",
    points: 300,
    progress: 45,
    icon: "✏️"
  },
  {
    id: "3",
    title: "Weekly Quiz Champion",
    description: "Score 90% or higher in weekly assessments",
    difficulty: "Medium",
    points: 200,
    progress: 80,
    icon: "🎯"
  }
];

export default function GamifiedDashboard() {
  const [userXP] = useState(1750);
  const [streak] = useState(7);
  const [level] = useState(15);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
            Level Up Your Learning. Conquer Challenges. Earn Your Rank.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* User Profile Sidebar */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-200"
              />
              <h2 className="text-xl font-bold text-gray-800">Alex Thompson</h2>
              <p className="text-purple-600 font-medium">Knowledge Seeker</p>
              <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <p className="text-gray-600 italic">
                  "Every page you read gets you closer to your goal."
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-medium">Current Level</span>
                </div>
                <span className="text-blue-600 font-bold">{level}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="font-medium">Streak</span>
                </div>
                <span className="text-purple-600 font-bold">{streak} days</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-6">
            {/* Leaderboard Panel */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
                Leaderboard
              </h2>
              
              <div className="space-y-4">
                {leaderboardData.map((entry) => (
                  <motion.div
                    key={entry.rank}
                    className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-2xl font-bold text-gray-300 w-12">
                      #{entry.rank}
                    </span>
                    <img
                      src={entry.avatar}
                      alt={entry.username}
                      className="w-12 h-12 rounded-full mx-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{entry.username}</h3>
                      <div className="flex space-x-1">
                        {entry.badges.map((badge, idx) => (
                          <span key={idx}>{badge}</span>
                        ))}
                      </div>
                    </div>
                    <span className="font-bold text-purple-600">{entry.points} XP</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Study Challenges Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                Active Challenges
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challengesData.map((challenge) => (
                  <motion.div
                    key={challenge.id}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-2xl mr-2">{challenge.icon}</span>
                        <h3 className="font-semibold text-gray-800 inline-block">
                          {challenge.title}
                        </h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium
                        ${challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'}`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                    
                    <div className="space-y-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${challenge.progress}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{challenge.progress}% Complete</span>
                        <span className="text-sm font-medium text-purple-600">
                          {challenge.points} XP
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Points & Rewards Tracker */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 text-yellow-500 mr-2" />
                Progress & Rewards
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative inline-block">
                    <svg className="w-24 h-24">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="44"
                        cx="48"
                        cy="48"
                      />
                      <circle
                        className="text-blue-600"
                        strokeWidth="8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="44"
                        cx="48"
                        cy="48"
                        style={{
                          strokeDasharray: `${2 * Math.PI * 44}`,
                          strokeDashoffset: `${2 * Math.PI * 44 * (1 - userXP / 2000)}`,
                          transform: 'rotate(-90deg)',
                          transformOrigin: '48px 48px'
                        }}
                      />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-blue-600">
                      {userXP}
                    </span>
                  </div>
                  <p className="mt-2 font-medium text-gray-600">Total XP</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Recent Badges</h3>
                  <div className="flex space-x-2">
                    <span className="text-3xl">🏆</span>
                    <span className="text-3xl">⭐</span>
                    <span className="text-3xl">📚</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Next Reward</h3>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Book className="w-6 h-6 text-purple-600 mr-2" />
                      <span className="text-purple-700">Premium Study Materials</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Unlock at 2000 XP (250 XP remaining)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}