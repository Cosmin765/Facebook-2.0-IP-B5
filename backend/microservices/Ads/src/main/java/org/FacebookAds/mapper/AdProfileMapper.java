package org.FacebookAds.mapper;

import org.FacebookAds.model.dto.AdProfileDto;
import org.FacebookAds.model.entity.AdProfile;

public class AdProfileMapper {
    public static AdProfileDto toDto(AdProfile adProfile) {
        return AdProfileDto.builder()
                .id(adProfile.getId())
                .userId(adProfile.getUserId())
                .build();
    }
}
