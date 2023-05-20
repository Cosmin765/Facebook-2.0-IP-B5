package org.Facebook.common;

public class AdProfileMapper {
    public static AdProfileDto toDto(AdProfile adProfile) {
        return AdProfileDto.builder()
                .id(adProfile.getId())
                .userId(adProfile.getUserId())
                .build();
    }
}
