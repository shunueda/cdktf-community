// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosUrlFilteringSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#alert DataPanosUrlFilteringSecurityProfile#alert}
  */
  readonly alert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#allow DataPanosUrlFilteringSecurityProfile#allow}
  */
  readonly allow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#block DataPanosUrlFilteringSecurityProfile#block}
  */
  readonly block?: string[];
  /**
  * Enable cloud inline categorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#cloud_inline_cat DataPanosUrlFilteringSecurityProfile#cloud_inline_cat}
  */
  readonly cloudInlineCat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#continue DataPanosUrlFilteringSecurityProfile#continue}
  */
  readonly continue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#credential_enforcement DataPanosUrlFilteringSecurityProfile#credential_enforcement}
  */
  readonly credentialEnforcement?: DataPanosUrlFilteringSecurityProfileCredentialEnforcement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#description DataPanosUrlFilteringSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#disable_override DataPanosUrlFilteringSecurityProfile#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * Track container page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#enable_container_page DataPanosUrlFilteringSecurityProfile#enable_container_page}
  */
  readonly enableContainerPage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#http_header_insertion DataPanosUrlFilteringSecurityProfile#http_header_insertion}
  */
  readonly httpHeaderInsertion?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertion[] | cdktf.IResolvable;
  /**
  * Enable local inline categorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#local_inline_cat DataPanosUrlFilteringSecurityProfile#local_inline_cat}
  */
  readonly localInlineCat?: boolean | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#location DataPanosUrlFilteringSecurityProfile#location}
  */
  readonly location: DataPanosUrlFilteringSecurityProfileLocation;
  /**
  * Log container page only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#log_container_page_only DataPanosUrlFilteringSecurityProfile#log_container_page_only}
  */
  readonly logContainerPageOnly?: boolean | cdktf.IResolvable;
  /**
  * Log HTTP Header Referer field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#log_http_hdr_referer DataPanosUrlFilteringSecurityProfile#log_http_hdr_referer}
  */
  readonly logHttpHdrReferer?: boolean | cdktf.IResolvable;
  /**
  * Log HTTP Header User-Agent field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#log_http_hdr_user_agent DataPanosUrlFilteringSecurityProfile#log_http_hdr_user_agent}
  */
  readonly logHttpHdrUserAgent?: boolean | cdktf.IResolvable;
  /**
  * Log HTTP Header X-Forwarded-For field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#log_http_hdr_xff DataPanosUrlFilteringSecurityProfile#log_http_hdr_xff}
  */
  readonly logHttpHdrXff?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#mlav_category_exception DataPanosUrlFilteringSecurityProfile#mlav_category_exception}
  */
  readonly mlavCategoryException?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#name DataPanosUrlFilteringSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#override DataPanosUrlFilteringSecurityProfile#override}
  */
  readonly override?: string[];
  /**
  * Safe-Search will be enforced if it is set 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#safe_search_enforcement DataPanosUrlFilteringSecurityProfile#safe_search_enforcement}
  */
  readonly safeSearchEnforcement?: boolean | cdktf.IResolvable;
}
export interface DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabled {
}

export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabledToTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabledToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentials {
}

export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentialsToTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentialsToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUser {
}

export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUserToTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUserToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosUrlFilteringSecurityProfileCredentialEnforcementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#disabled DataPanosUrlFilteringSecurityProfile#disabled}
  */
  readonly disabled?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#domain_credentials DataPanosUrlFilteringSecurityProfile#domain_credentials}
  */
  readonly domainCredentials?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentials;
  /**
  * Use Group Mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#group_mapping DataPanosUrlFilteringSecurityProfile#group_mapping}
  */
  readonly groupMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#ip_user DataPanosUrlFilteringSecurityProfile#ip_user}
  */
  readonly ipUser?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUser;
}

export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeToTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabledToTerraform(struct!.disabled),
    domain_credentials: dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentialsToTerraform(struct!.domainCredentials),
    group_mapping: cdktf.stringToTerraform(struct!.groupMapping),
    ip_user: dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUserToTerraform(struct!.ipUser),
  }
}


export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabled",
    },
    domain_credentials: {
      value: dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentialsToHclTerraform(struct!.domainCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentials",
    },
    group_mapping: {
      value: cdktf.stringToHclTerraform(struct!.groupMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_user: {
      value: dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUserToHclTerraform(struct!.ipUser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileCredentialEnforcementMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._domainCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainCredentials = this._domainCredentials?.internalValue;
    }
    if (this._groupMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMapping = this._groupMapping;
    }
    if (this._ipUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUser = this._ipUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcementMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._domainCredentials.internalValue = undefined;
      this._groupMapping = undefined;
      this._ipUser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._domainCredentials.internalValue = value.domainCredentials;
      this._groupMapping = value.groupMapping;
      this._ipUser.internalValue = value.ipUser;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // domain_credentials - computed: true, optional: true, required: false
  private _domainCredentials = new DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentialsOutputReference(this, "domain_credentials");
  public get domainCredentials() {
    return this._domainCredentials;
  }
  public putDomainCredentials(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeDomainCredentials) {
    this._domainCredentials.internalValue = value;
  }
  public resetDomainCredentials() {
    this._domainCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainCredentialsInput() {
    return this._domainCredentials.internalValue;
  }

  // group_mapping - computed: true, optional: true, required: false
  private _groupMapping?: string; 
  public get groupMapping() {
    return this.getStringAttribute('group_mapping');
  }
  public set groupMapping(value: string) {
    this._groupMapping = value;
  }
  public resetGroupMapping() {
    this._groupMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMappingInput() {
    return this._groupMapping;
  }

  // ip_user - computed: true, optional: true, required: false
  private _ipUser = new DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUserOutputReference(this, "ip_user");
  public get ipUser() {
    return this._ipUser;
  }
  public putIpUser(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeIpUser) {
    this._ipUser.internalValue = value;
  }
  public resetIpUser() {
    this._ipUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUserInput() {
    return this._ipUser.internalValue;
  }
}
export interface DataPanosUrlFilteringSecurityProfileCredentialEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#alert DataPanosUrlFilteringSecurityProfile#alert}
  */
  readonly alert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#allow DataPanosUrlFilteringSecurityProfile#allow}
  */
  readonly allow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#block DataPanosUrlFilteringSecurityProfile#block}
  */
  readonly block?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#continue DataPanosUrlFilteringSecurityProfile#continue}
  */
  readonly continue?: string[];
  /**
  * Log severity when credential matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#log_severity DataPanosUrlFilteringSecurityProfile#log_severity}
  */
  readonly logSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#mode DataPanosUrlFilteringSecurityProfile#mode}
  */
  readonly mode?: DataPanosUrlFilteringSecurityProfileCredentialEnforcementMode;
}

export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementToTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alert),
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.block),
    continue: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.continue),
    log_severity: cdktf.stringToTerraform(struct!.logSeverity),
    mode: dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeToTerraform(struct!.mode),
  }
}


export function dataPanosUrlFilteringSecurityProfileCredentialEnforcementToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileCredentialEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alert),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.block),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    continue: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.continue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_severity: {
      value: cdktf.stringToHclTerraform(struct!.logSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: dataPanosUrlFilteringSecurityProfileCredentialEnforcementModeToHclTerraform(struct!.mode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosUrlFilteringSecurityProfileCredentialEnforcementMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosUrlFilteringSecurityProfileCredentialEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileCredentialEnforcement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
    }
    if (this._logSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeverity = this._logSeverity;
    }
    if (this._mode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._allow = undefined;
      this._block = undefined;
      this._continue = undefined;
      this._logSeverity = undefined;
      this._mode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._allow = value.allow;
      this._block = value.block;
      this._continue = value.continue;
      this._logSeverity = value.logSeverity;
      this._mode.internalValue = value.mode;
    }
  }

  // alert - computed: true, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return this.getListAttribute('alert');
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // allow - computed: true, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // block - computed: true, optional: true, required: false
  private _block?: string[]; 
  public get block() {
    return this.getListAttribute('block');
  }
  public set block(value: string[]) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // continue - computed: true, optional: true, required: false
  private _continue?: string[]; 
  public get continue() {
    return this.getListAttribute('continue');
  }
  public set continue(value: string[]) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // log_severity - computed: true, optional: true, required: false
  private _logSeverity?: string; 
  public get logSeverity() {
    return this.getStringAttribute('log_severity');
  }
  public set logSeverity(value: string) {
    this._logSeverity = value;
  }
  public resetLogSeverity() {
    this._logSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeverityInput() {
    return this._logSeverity;
  }

  // mode - computed: true, optional: true, required: false
  private _mode = new DataPanosUrlFilteringSecurityProfileCredentialEnforcementModeOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcementMode) {
    this._mode.internalValue = value;
  }
  public resetMode() {
    this._mode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode.internalValue;
  }
}
export interface DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#header DataPanosUrlFilteringSecurityProfile#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#log DataPanosUrlFilteringSecurityProfile#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#name DataPanosUrlFilteringSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#value DataPanosUrlFilteringSecurityProfile#value}
  */
  readonly value?: string;
}

export function dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersToTerraform(struct?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    log: cdktf.booleanToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._log = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._log = value.log;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // log - computed: true, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersList extends cdktf.ComplexList {
  public internalValue? : DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersOutputReference {
    return new DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#domains DataPanosUrlFilteringSecurityProfile#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#headers DataPanosUrlFilteringSecurityProfile#headers}
  */
  readonly headers?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#name DataPanosUrlFilteringSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeToTerraform(struct?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    headers: cdktf.listMapper(dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersToTerraform, false)(struct!.headers),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: cdktf.listMapperHcl(dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domains = undefined;
      this._headers.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domains = value.domains;
      this._headers.internalValue = value.headers;
      this._name = value.name;
    }
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeList extends cdktf.ComplexList {
  public internalValue? : DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionType[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeOutputReference {
    return new DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosUrlFilteringSecurityProfileHttpHeaderInsertion {
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#disable_override DataPanosUrlFilteringSecurityProfile#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#name DataPanosUrlFilteringSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#type DataPanosUrlFilteringSecurityProfile#type}
  */
  readonly type?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionType[] | cdktf.IResolvable;
}

export function dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionToTerraform(struct?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_override: cdktf.stringToTerraform(struct!.disableOverride),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.listMapper(dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeToTerraform, false)(struct!.type),
  }
}


export function dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_override: {
      value: cdktf.stringToHclTerraform(struct!.disableOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.listMapperHcl(dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeToHclTerraform, false)(struct!.type),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileHttpHeaderInsertion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOverride = this._disableOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableOverride = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableOverride = value.disableOverride;
      this._name = value.name;
      this._type.internalValue = value.type;
    }
  }

  // disable_override - computed: true, optional: true, required: false
  private _disableOverride?: string; 
  public get disableOverride() {
    return this.getStringAttribute('disable_override');
  }
  public set disableOverride(value: string) {
    this._disableOverride = value;
  }
  public resetDisableOverride() {
    this._disableOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOverrideInput() {
    return this._disableOverride;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionTypeList(this, "type", false);
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionType[] | cdktf.IResolvable) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionList extends cdktf.ComplexList {
  public internalValue? : DataPanosUrlFilteringSecurityProfileHttpHeaderInsertion[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionOutputReference {
    return new DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosUrlFilteringSecurityProfileLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#name DataPanosUrlFilteringSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#panorama_device DataPanosUrlFilteringSecurityProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosUrlFilteringSecurityProfileLocationDeviceGroupToTerraform(struct?: DataPanosUrlFilteringSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosUrlFilteringSecurityProfileLocationDeviceGroupToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosUrlFilteringSecurityProfileLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosUrlFilteringSecurityProfileLocationShared {
}

export function dataPanosUrlFilteringSecurityProfileLocationSharedToTerraform(struct?: DataPanosUrlFilteringSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosUrlFilteringSecurityProfileLocationSharedToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosUrlFilteringSecurityProfileLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosUrlFilteringSecurityProfileLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#device_group DataPanosUrlFilteringSecurityProfile#device_group}
  */
  readonly deviceGroup?: DataPanosUrlFilteringSecurityProfileLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#shared DataPanosUrlFilteringSecurityProfile#shared}
  */
  readonly shared?: DataPanosUrlFilteringSecurityProfileLocationShared;
}

export function dataPanosUrlFilteringSecurityProfileLocationToTerraform(struct?: DataPanosUrlFilteringSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosUrlFilteringSecurityProfileLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosUrlFilteringSecurityProfileLocationSharedToTerraform(struct!.shared),
  }
}


export function dataPanosUrlFilteringSecurityProfileLocationToHclTerraform(struct?: DataPanosUrlFilteringSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosUrlFilteringSecurityProfileLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosUrlFilteringSecurityProfileLocationDeviceGroup",
    },
    shared: {
      value: dataPanosUrlFilteringSecurityProfileLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosUrlFilteringSecurityProfileLocationShared",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosUrlFilteringSecurityProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosUrlFilteringSecurityProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosUrlFilteringSecurityProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = undefined;
      this._shared.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = value.deviceGroup;
      this._shared.internalValue = value.shared;
    }
  }

  // device_group - computed: false, optional: true, required: false
  private _deviceGroup = new DataPanosUrlFilteringSecurityProfileLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosUrlFilteringSecurityProfileLocationDeviceGroup) {
    this._deviceGroup.internalValue = value;
  }
  public resetDeviceGroup() {
    this._deviceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new DataPanosUrlFilteringSecurityProfileLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosUrlFilteringSecurityProfileLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile panos_url_filtering_security_profile}
*/
export class DataPanosUrlFilteringSecurityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_url_filtering_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosUrlFilteringSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosUrlFilteringSecurityProfile to import
  * @param importFromId The id of the existing DataPanosUrlFilteringSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosUrlFilteringSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_url_filtering_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/url_filtering_security_profile panos_url_filtering_security_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosUrlFilteringSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosUrlFilteringSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_url_filtering_security_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alert = config.alert;
    this._allow = config.allow;
    this._block = config.block;
    this._cloudInlineCat = config.cloudInlineCat;
    this._continue = config.continue;
    this._credentialEnforcement.internalValue = config.credentialEnforcement;
    this._description = config.description;
    this._disableOverride = config.disableOverride;
    this._enableContainerPage = config.enableContainerPage;
    this._httpHeaderInsertion.internalValue = config.httpHeaderInsertion;
    this._localInlineCat = config.localInlineCat;
    this._location.internalValue = config.location;
    this._logContainerPageOnly = config.logContainerPageOnly;
    this._logHttpHdrReferer = config.logHttpHdrReferer;
    this._logHttpHdrUserAgent = config.logHttpHdrUserAgent;
    this._logHttpHdrXff = config.logHttpHdrXff;
    this._mlavCategoryException = config.mlavCategoryException;
    this._name = config.name;
    this._override = config.override;
    this._safeSearchEnforcement = config.safeSearchEnforcement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert - computed: true, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return this.getListAttribute('alert');
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // allow - computed: true, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // block - computed: true, optional: true, required: false
  private _block?: string[]; 
  public get block() {
    return this.getListAttribute('block');
  }
  public set block(value: string[]) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // cloud_inline_cat - computed: true, optional: true, required: false
  private _cloudInlineCat?: boolean | cdktf.IResolvable; 
  public get cloudInlineCat() {
    return this.getBooleanAttribute('cloud_inline_cat');
  }
  public set cloudInlineCat(value: boolean | cdktf.IResolvable) {
    this._cloudInlineCat = value;
  }
  public resetCloudInlineCat() {
    this._cloudInlineCat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInlineCatInput() {
    return this._cloudInlineCat;
  }

  // continue - computed: true, optional: true, required: false
  private _continue?: string[]; 
  public get continue() {
    return this.getListAttribute('continue');
  }
  public set continue(value: string[]) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // credential_enforcement - computed: true, optional: true, required: false
  private _credentialEnforcement = new DataPanosUrlFilteringSecurityProfileCredentialEnforcementOutputReference(this, "credential_enforcement");
  public get credentialEnforcement() {
    return this._credentialEnforcement;
  }
  public putCredentialEnforcement(value: DataPanosUrlFilteringSecurityProfileCredentialEnforcement) {
    this._credentialEnforcement.internalValue = value;
  }
  public resetCredentialEnforcement() {
    this._credentialEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialEnforcementInput() {
    return this._credentialEnforcement.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_override - computed: true, optional: true, required: false
  private _disableOverride?: string; 
  public get disableOverride() {
    return this.getStringAttribute('disable_override');
  }
  public set disableOverride(value: string) {
    this._disableOverride = value;
  }
  public resetDisableOverride() {
    this._disableOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOverrideInput() {
    return this._disableOverride;
  }

  // enable_container_page - computed: true, optional: true, required: false
  private _enableContainerPage?: boolean | cdktf.IResolvable; 
  public get enableContainerPage() {
    return this.getBooleanAttribute('enable_container_page');
  }
  public set enableContainerPage(value: boolean | cdktf.IResolvable) {
    this._enableContainerPage = value;
  }
  public resetEnableContainerPage() {
    this._enableContainerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContainerPageInput() {
    return this._enableContainerPage;
  }

  // http_header_insertion - computed: true, optional: true, required: false
  private _httpHeaderInsertion = new DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionList(this, "http_header_insertion", false);
  public get httpHeaderInsertion() {
    return this._httpHeaderInsertion;
  }
  public putHttpHeaderInsertion(value: DataPanosUrlFilteringSecurityProfileHttpHeaderInsertion[] | cdktf.IResolvable) {
    this._httpHeaderInsertion.internalValue = value;
  }
  public resetHttpHeaderInsertion() {
    this._httpHeaderInsertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInsertionInput() {
    return this._httpHeaderInsertion.internalValue;
  }

  // local_inline_cat - computed: true, optional: true, required: false
  private _localInlineCat?: boolean | cdktf.IResolvable; 
  public get localInlineCat() {
    return this.getBooleanAttribute('local_inline_cat');
  }
  public set localInlineCat(value: boolean | cdktf.IResolvable) {
    this._localInlineCat = value;
  }
  public resetLocalInlineCat() {
    this._localInlineCat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInlineCatInput() {
    return this._localInlineCat;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosUrlFilteringSecurityProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosUrlFilteringSecurityProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // log_container_page_only - computed: true, optional: true, required: false
  private _logContainerPageOnly?: boolean | cdktf.IResolvable; 
  public get logContainerPageOnly() {
    return this.getBooleanAttribute('log_container_page_only');
  }
  public set logContainerPageOnly(value: boolean | cdktf.IResolvable) {
    this._logContainerPageOnly = value;
  }
  public resetLogContainerPageOnly() {
    this._logContainerPageOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logContainerPageOnlyInput() {
    return this._logContainerPageOnly;
  }

  // log_http_hdr_referer - computed: true, optional: true, required: false
  private _logHttpHdrReferer?: boolean | cdktf.IResolvable; 
  public get logHttpHdrReferer() {
    return this.getBooleanAttribute('log_http_hdr_referer');
  }
  public set logHttpHdrReferer(value: boolean | cdktf.IResolvable) {
    this._logHttpHdrReferer = value;
  }
  public resetLogHttpHdrReferer() {
    this._logHttpHdrReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHttpHdrRefererInput() {
    return this._logHttpHdrReferer;
  }

  // log_http_hdr_user_agent - computed: true, optional: true, required: false
  private _logHttpHdrUserAgent?: boolean | cdktf.IResolvable; 
  public get logHttpHdrUserAgent() {
    return this.getBooleanAttribute('log_http_hdr_user_agent');
  }
  public set logHttpHdrUserAgent(value: boolean | cdktf.IResolvable) {
    this._logHttpHdrUserAgent = value;
  }
  public resetLogHttpHdrUserAgent() {
    this._logHttpHdrUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHttpHdrUserAgentInput() {
    return this._logHttpHdrUserAgent;
  }

  // log_http_hdr_xff - computed: true, optional: true, required: false
  private _logHttpHdrXff?: boolean | cdktf.IResolvable; 
  public get logHttpHdrXff() {
    return this.getBooleanAttribute('log_http_hdr_xff');
  }
  public set logHttpHdrXff(value: boolean | cdktf.IResolvable) {
    this._logHttpHdrXff = value;
  }
  public resetLogHttpHdrXff() {
    this._logHttpHdrXff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHttpHdrXffInput() {
    return this._logHttpHdrXff;
  }

  // mlav_category_exception - computed: true, optional: true, required: false
  private _mlavCategoryException?: string[]; 
  public get mlavCategoryException() {
    return this.getListAttribute('mlav_category_exception');
  }
  public set mlavCategoryException(value: string[]) {
    this._mlavCategoryException = value;
  }
  public resetMlavCategoryException() {
    this._mlavCategoryException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlavCategoryExceptionInput() {
    return this._mlavCategoryException;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // override - computed: true, optional: true, required: false
  private _override?: string[]; 
  public get override() {
    return this.getListAttribute('override');
  }
  public set override(value: string[]) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // safe_search_enforcement - computed: true, optional: true, required: false
  private _safeSearchEnforcement?: boolean | cdktf.IResolvable; 
  public get safeSearchEnforcement() {
    return this.getBooleanAttribute('safe_search_enforcement');
  }
  public set safeSearchEnforcement(value: boolean | cdktf.IResolvable) {
    this._safeSearchEnforcement = value;
  }
  public resetSafeSearchEnforcement() {
    this._safeSearchEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchEnforcementInput() {
    return this._safeSearchEnforcement;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alert),
      allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allow),
      block: cdktf.listMapper(cdktf.stringToTerraform, false)(this._block),
      cloud_inline_cat: cdktf.booleanToTerraform(this._cloudInlineCat),
      continue: cdktf.listMapper(cdktf.stringToTerraform, false)(this._continue),
      credential_enforcement: dataPanosUrlFilteringSecurityProfileCredentialEnforcementToTerraform(this._credentialEnforcement.internalValue),
      description: cdktf.stringToTerraform(this._description),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      enable_container_page: cdktf.booleanToTerraform(this._enableContainerPage),
      http_header_insertion: cdktf.listMapper(dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionToTerraform, false)(this._httpHeaderInsertion.internalValue),
      local_inline_cat: cdktf.booleanToTerraform(this._localInlineCat),
      location: dataPanosUrlFilteringSecurityProfileLocationToTerraform(this._location.internalValue),
      log_container_page_only: cdktf.booleanToTerraform(this._logContainerPageOnly),
      log_http_hdr_referer: cdktf.booleanToTerraform(this._logHttpHdrReferer),
      log_http_hdr_user_agent: cdktf.booleanToTerraform(this._logHttpHdrUserAgent),
      log_http_hdr_xff: cdktf.booleanToTerraform(this._logHttpHdrXff),
      mlav_category_exception: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mlavCategoryException),
      name: cdktf.stringToTerraform(this._name),
      override: cdktf.listMapper(cdktf.stringToTerraform, false)(this._override),
      safe_search_enforcement: cdktf.booleanToTerraform(this._safeSearchEnforcement),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alert),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allow),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      block: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._block),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cloud_inline_cat: {
        value: cdktf.booleanToHclTerraform(this._cloudInlineCat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      continue: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._continue),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      credential_enforcement: {
        value: dataPanosUrlFilteringSecurityProfileCredentialEnforcementToHclTerraform(this._credentialEnforcement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosUrlFilteringSecurityProfileCredentialEnforcement",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_override: {
        value: cdktf.stringToHclTerraform(this._disableOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_container_page: {
        value: cdktf.booleanToHclTerraform(this._enableContainerPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_header_insertion: {
        value: cdktf.listMapperHcl(dataPanosUrlFilteringSecurityProfileHttpHeaderInsertionToHclTerraform, false)(this._httpHeaderInsertion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosUrlFilteringSecurityProfileHttpHeaderInsertionList",
      },
      local_inline_cat: {
        value: cdktf.booleanToHclTerraform(this._localInlineCat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: dataPanosUrlFilteringSecurityProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosUrlFilteringSecurityProfileLocation",
      },
      log_container_page_only: {
        value: cdktf.booleanToHclTerraform(this._logContainerPageOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_http_hdr_referer: {
        value: cdktf.booleanToHclTerraform(this._logHttpHdrReferer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_http_hdr_user_agent: {
        value: cdktf.booleanToHclTerraform(this._logHttpHdrUserAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_http_hdr_xff: {
        value: cdktf.booleanToHclTerraform(this._logHttpHdrXff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mlav_category_exception: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mlavCategoryException),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._override),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      safe_search_enforcement: {
        value: cdktf.booleanToHclTerraform(this._safeSearchEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
