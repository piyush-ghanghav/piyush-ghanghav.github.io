import { motion } from 'framer-motion';
import { BarChart, Clock, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, BarChart as ReChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface PageVisit {
  path: string;
  count: number;
  timeSpent: number;
  engagementScore: number;
}

interface SmartInsightsProps {
  visits: Array<{
    path: string;
    timestamp: string;
    timeSpent?: number;
  }>;
}

export const SmartInsights = ({ visits }: SmartInsightsProps) => {
  // Calculate page statistics
  const pageStats = visits.reduce((acc: Record<string, PageVisit>, visit) => {
    const path = visit.path;
    if (!acc[path]) {
      acc[path] = {
        path,
        count: 0,
        timeSpent: 0,
        engagementScore: 0
      };
    }
    acc[path].count++;
    acc[path].timeSpent += visit.timeSpent || 0;
    acc[path].engagementScore = (acc[path].count * 0.6) + (acc[path].timeSpent * 0.4);
    return acc;
  }, {});

  const pageAnalytics = Object.values(pageStats)
    .sort((a, b) => b.engagementScore - a.engagementScore)
    .slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[--surface0] rounded-xl p-6 border border-[--surface1]"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[--blue]" />
          <h3 className="font-medium text-lg">Smart Insights</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Visited Pages */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[--text] mb-3">
            <BarChart className="w-4 h-4" />
            <span className="font-medium">Top Pages</span>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <ReChart data={pageAnalytics}>
                <XAxis dataKey="path" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="var(--blue)" />
              </ReChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement Heatmap */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[--text] mb-3">
            <Clock className="w-4 h-4" />
            <span className="font-medium">Engagement Heat</span>
          </div>
          <div className="space-y-2">
            {pageAnalytics.map((page) => (
              <motion.div
                key={page.path}
                className="relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="p-3 bg-[--surface1]">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[--text]">
                      {page.path}
                    </span>
                    <span className="text-xs text-[--subtext0]">
                      {Math.round(page.engagementScore)} points
                    </span>
                  </div>
                  <div className="mt-2 w-full h-2 bg-[--surface2] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[--blue] to-[--sky]"
                      style={{
                        width: `${(page.engagementScore / pageAnalytics[0].engagementScore) * 100}%`,
                        transition: 'width 1s ease-in-out'
                      }}
                    />
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `linear-gradient(90deg, var(--blue) 0%, transparent ${
                      (page.engagementScore / pageAnalytics[0].engagementScore) * 100
                    }%)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};