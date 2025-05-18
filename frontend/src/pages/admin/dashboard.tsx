import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const userData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 700 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 800 },
];

const salesData = [
  { name: 'Jan', sales: 2400 },
  { name: 'Feb', sales: 1398 },
  { name: 'Mar', sales: 9800 },
  { name: 'Apr', sales: 3908 },
];

const productData = [
  { name: 'Eletrônicos', value: 400 },
  { name: 'Roupas', value: 300 },
  { name: 'Livros', value: 300 },
  { name: 'Outros', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function Dashboard() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Dashboard com Recharts</h1>
      <div className="row g-4">
        {/* Card 1 - Área */}
        <div className="col-md-6 col-xl-4">
          <div className="card p-3 shadow-sm rounded-4">
            <h5 className="card-title">Usuários Ativos</h5>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={userData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2 - Barras */}
        <div className="col-md-6 col-xl-4">
          <div className="card p-3 shadow-sm rounded-4">
            <h5 className="card-title">Vendas Mensais</h5>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 3 - Pizza */}
        <div className="col-md-6 col-xl-4">
          <div className="card p-3 shadow-sm rounded-4">
            <h5 className="card-title">Distribuição de Produtos</h5>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={productData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                  label
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}



