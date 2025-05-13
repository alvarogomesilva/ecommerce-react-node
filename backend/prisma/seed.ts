import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('123456', 6)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@loja.com' },
    update: {},
    create: {
      name: 'Admin da Loja',
      email: 'admin@loja.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  await prisma.store.upsert({
    where: { id: admin.id },
    update: {},
    create: {
      name: 'Minha Loja Legal',
      description: 'A melhor loja para seus produtos favoritos.',
      logoUrl: 'https://example.com/logo.png',
      primaryColor: '#FF5722',
      email: 'suporte@loja.com',
      phone: '+55 47 99999-9999',
      address: 'Rua Exemplo, 123 - São Paulo, SP',
      adminId: admin.id,
    },
  })

  console.log('✅ Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro ao executar seed:', e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
