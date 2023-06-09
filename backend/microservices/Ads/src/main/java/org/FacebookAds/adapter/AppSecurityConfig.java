package org.FacebookAds.adapter;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableWebSecurity
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {
//    @Autowired
//    private UserDetailsService userDetailsService;

    public static BCryptPasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

//    @Bean
//    public AuthenticationProvider authProvider() {
//
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//
//        provider.setPasswordEncoder(getPasswordEncoder());
//        provider.setUserDetailsService(userDetailsService);
//
//        return provider;
//    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests().anyRequest().permitAll();

//        http.authorizeHttpRequests()
//                .antMatchers(HttpMethod.GET,"/", "/login").permitAll()
//                .antMatchers(HttpMethod.POST,"/register").permitAll()
//                .anyRequest().authenticated();
//        http.formLogin();
//        http.httpBasic();
//        http.cors().and().csrf().disable();
    }
}
