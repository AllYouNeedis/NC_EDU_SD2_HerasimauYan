package com.yanherasimau.fapi.security;

public interface SecurityJwtConstants {
    long ACCESS_TOKEN_VALIDITY_SECONDS = 20*60*60;
    String SIGNING_KEY = "j546h87378hfchg7dcvjkuugbhhbjfm";
    String TOKEN_PREFIX = "Bearer";
    String HEADER_STRING = "Authorization";
    String AUTHORITIES_KEY = "scopes";
}
