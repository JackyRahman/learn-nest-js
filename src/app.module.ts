import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from './controllers/location.controller';
import { City } from './model/city.entity';
import { Country } from './model/country.entity';
import { Region } from './model/region.entity';
import { CityService } from './services/city.service';
// import { User } from './justLean-users/user.entity';
// import { UserService } from './justLean-users/user.service';
// import { UserController } from './justLean-users/user.controller';
import { CountryService } from './services/country.service';
import { RegionService } from './services/region.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '34.101.70.255',
      port:5432,
      username: 'debio_admin',
      password: 'debio#2021',
      database: 'debio_escrow_dev',
      autoLoadEntities: true,
      // synchronize: true
    }),
    TypeOrmModule.forFeature([Country, Region, City])
  ],
  controllers: [LocationController],
  providers: [CountryService, RegionService, CityService],
})
export class AppModule {}
