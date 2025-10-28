// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployDeploymentTargetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter to search by a list of communication styles. Valid communication styles are `AzureCloudService`, `AzureServiceFabricCluster`, `AzureWebApp`, `Ftp`, `Kubernetes`, `None`, `OfflineDrop`, `Ssh`, `TentacleActive`, or `TentaclePassive`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#communication_styles DataOctopusdeployDeploymentTargets#communication_styles}
  */
  readonly communicationStyles?: string[];
  /**
  * A filter to search by deployment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#deployment_id DataOctopusdeployDeploymentTargets#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * A filter to search by a list of environment IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#environments DataOctopusdeployDeploymentTargets#environments}
  */
  readonly environments?: string[];
  /**
  * A filter to search by a list of health statuses of resources. Valid health statuses are `HasWarnings`, `Healthy`, `Unavailable`, `Unhealthy`, or `Unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#health_statuses DataOctopusdeployDeploymentTargets#health_statuses}
  */
  readonly healthStatuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#id DataOctopusdeployDeploymentTargets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#ids DataOctopusdeployDeploymentTargets#ids}
  */
  readonly ids?: string[];
  /**
  * A filter to search by the disabled status of a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#is_disabled DataOctopusdeployDeploymentTargets#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * A filter to search by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#name DataOctopusdeployDeploymentTargets#name}
  */
  readonly name?: string;
  /**
  * A filter to search by the partial match of a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#partial_name DataOctopusdeployDeploymentTargets#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter to search by a list of role IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#roles DataOctopusdeployDeploymentTargets#roles}
  */
  readonly roles?: string[];
  /**
  * A list of shell names to match in the query and/or search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#shell_names DataOctopusdeployDeploymentTargets#shell_names}
  */
  readonly shellNames?: string[];
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#skip DataOctopusdeployDeploymentTargets#skip}
  */
  readonly skip?: number;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#space_id DataOctopusdeployDeploymentTargets#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#take DataOctopusdeployDeploymentTargets#take}
  */
  readonly take?: number;
  /**
  * A filter to search by a list of tenant tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#tenant_tags DataOctopusdeployDeploymentTargets#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * A filter to search by a list of tenant IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#tenants DataOctopusdeployDeploymentTargets#tenants}
  */
  readonly tenants?: string[];
  /**
  * The thumbprint of the deployment target to match in the query and/or search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#thumbprint DataOctopusdeployDeploymentTargets#thumbprint}
  */
  readonly thumbprint?: string;
}
export interface DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthentication {
}

export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthenticationToTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthenticationToHclTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // admin_login - computed: true, optional: false, required: false
  public get adminLogin() {
    return this.getStringAttribute('admin_login');
  }

  // assume_role - computed: true, optional: false, required: false
  public get assumeRole() {
    return this.getBooleanAttribute('assume_role');
  }

  // assume_role_external_id - computed: true, optional: false, required: false
  public get assumeRoleExternalId() {
    return this.getStringAttribute('assume_role_external_id');
  }

  // assume_role_session_duration - computed: true, optional: false, required: false
  public get assumeRoleSessionDuration() {
    return this.getNumberAttribute('assume_role_session_duration');
  }

  // assumed_role_arn - computed: true, optional: false, required: false
  public get assumedRoleArn() {
    return this.getStringAttribute('assumed_role_arn');
  }

  // assumed_role_session - computed: true, optional: false, required: false
  public get assumedRoleSession() {
    return this.getStringAttribute('assumed_role_session');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_resource_group - computed: true, optional: false, required: false
  public get clusterResourceGroup() {
    return this.getStringAttribute('cluster_resource_group');
  }

  // impersonate_service_account - computed: true, optional: false, required: false
  public get impersonateServiceAccount() {
    return this.getBooleanAttribute('impersonate_service_account');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_account_emails - computed: true, optional: false, required: false
  public get serviceAccountEmails() {
    return this.getStringAttribute('service_account_emails');
  }

  // token_path - computed: true, optional: false, required: false
  public get tokenPath() {
    return this.getStringAttribute('token_path');
  }

  // use_instance_role - computed: true, optional: false, required: false
  public get useInstanceRole() {
    return this.getBooleanAttribute('use_instance_role');
  }

  // use_vm_service_account - computed: true, optional: false, required: false
  public get useVmServiceAccount() {
    return this.getBooleanAttribute('use_vm_service_account');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthenticationOutputReference {
    return new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainer {
}

export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainerToTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainerToHclTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feed_id - computed: true, optional: false, required: false
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainerList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainerOutputReference {
    return new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestination {
}

export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestinationToTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestinationToHclTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // drop_folder_path - computed: true, optional: false, required: false
  public get dropFolderPath() {
    return this.getStringAttribute('drop_folder_path');
  }
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestinationOutputReference {
    return new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetails {
}

export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetailsToTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetailsToHclTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // upgrade_locked - computed: true, optional: false, required: false
  public get upgradeLocked() {
    return this.getBooleanAttribute('upgrade_locked');
  }

  // upgrade_required - computed: true, optional: false, required: false
  public get upgradeRequired() {
    return this.getBooleanAttribute('upgrade_required');
  }

  // upgrade_suggested - computed: true, optional: false, required: false
  public get upgradeSuggested() {
    return this.getBooleanAttribute('upgrade_suggested');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetailsOutputReference {
    return new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpoint {
}

export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointToTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointToHclTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aad_client_credential_secret - computed: true, optional: false, required: false
  public get aadClientCredentialSecret() {
    return this.getStringAttribute('aad_client_credential_secret');
  }

  // aad_credential_type - computed: true, optional: false, required: false
  public get aadCredentialType() {
    return this.getStringAttribute('aad_credential_type');
  }

  // aad_user_credential_username - computed: true, optional: false, required: false
  public get aadUserCredentialUsername() {
    return this.getStringAttribute('aad_user_credential_username');
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // applications_directory - computed: true, optional: false, required: false
  public get applicationsDirectory() {
    return this.getStringAttribute('applications_directory');
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointAuthenticationList(this, "authentication", true);
  public get authentication() {
    return this._authentication;
  }

  // certificate_signature_algorithm - computed: true, optional: false, required: false
  public get certificateSignatureAlgorithm() {
    return this.getStringAttribute('certificate_signature_algorithm');
  }

  // certificate_store_location - computed: true, optional: false, required: false
  public get certificateStoreLocation() {
    return this.getStringAttribute('certificate_store_location');
  }

  // certificate_store_name - computed: true, optional: false, required: false
  public get certificateStoreName() {
    return this.getStringAttribute('certificate_store_name');
  }

  // client_certificate_variable - computed: true, optional: false, required: false
  public get clientCertificateVariable() {
    return this.getStringAttribute('client_certificate_variable');
  }

  // cloud_service_name - computed: true, optional: false, required: false
  public get cloudServiceName() {
    return this.getStringAttribute('cloud_service_name');
  }

  // cluster_certificate - computed: true, optional: false, required: false
  public get clusterCertificate() {
    return this.getStringAttribute('cluster_certificate');
  }

  // cluster_certificate_path - computed: true, optional: false, required: false
  public get clusterCertificatePath() {
    return this.getStringAttribute('cluster_certificate_path');
  }

  // cluster_url - computed: true, optional: false, required: false
  public get clusterUrl() {
    return this.getStringAttribute('cluster_url');
  }

  // communication_style - computed: true, optional: false, required: false
  public get communicationStyle() {
    return this.getStringAttribute('communication_style');
  }

  // connection_endpoint - computed: true, optional: false, required: false
  public get connectionEndpoint() {
    return this.getStringAttribute('connection_endpoint');
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointContainerList(this, "container", false);
  public get container() {
    return this._container;
  }

  // container_options - computed: true, optional: false, required: false
  public get containerOptions() {
    return this.getStringAttribute('container_options');
  }

  // default_worker_pool_id - computed: true, optional: false, required: false
  public get defaultWorkerPoolId() {
    return this.getStringAttribute('default_worker_pool_id');
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // dot_net_core_platform - computed: true, optional: false, required: false
  public get dotNetCorePlatform() {
    return this.getStringAttribute('dot_net_core_platform');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // proxy_id - computed: true, optional: false, required: false
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // running_in_container - computed: true, optional: false, required: false
  public get runningInContainer() {
    return this.getBooleanAttribute('running_in_container');
  }

  // security_mode - computed: true, optional: false, required: false
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }

  // server_certificate_thumbprint - computed: true, optional: false, required: false
  public get serverCertificateThumbprint() {
    return this.getStringAttribute('server_certificate_thumbprint');
  }

  // skip_tls_verification - computed: true, optional: false, required: false
  public get skipTlsVerification() {
    return this.getBooleanAttribute('skip_tls_verification');
  }

  // slot - computed: true, optional: false, required: false
  public get slot() {
    return this.getStringAttribute('slot');
  }

  // storage_account_name - computed: true, optional: false, required: false
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }

  // swap_if_possible - computed: true, optional: false, required: false
  public get swapIfPossible() {
    return this.getBooleanAttribute('swap_if_possible');
  }

  // tentacle_version_details - computed: true, optional: false, required: false
  private _tentacleVersionDetails = new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointTentacleVersionDetailsList(this, "tentacle_version_details", false);
  public get tentacleVersionDetails() {
    return this._tentacleVersionDetails;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // use_current_instance_count - computed: true, optional: false, required: false
  public get useCurrentInstanceCount() {
    return this.getBooleanAttribute('use_current_instance_count');
  }

  // web_app_name - computed: true, optional: false, required: false
  public get webAppName() {
    return this.getStringAttribute('web_app_name');
  }

  // web_app_slot_name - computed: true, optional: false, required: false
  public get webAppSlotName() {
    return this.getStringAttribute('web_app_slot_name');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointOutputReference {
    return new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployDeploymentTargetsDeploymentTargets {
}

export function dataOctopusdeployDeploymentTargetsDeploymentTargetsToTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentTargetsDeploymentTargetsToHclTerraform(struct?: DataOctopusdeployDeploymentTargetsDeploymentTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployDeploymentTargetsDeploymentTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentTargetsDeploymentTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new DataOctopusdeployDeploymentTargetsDeploymentTargetsEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }

  // environments - computed: true, optional: false, required: false
  public get environments() {
    return this.getListAttribute('environments');
  }

  // has_latest_calamari - computed: true, optional: false, required: false
  public get hasLatestCalamari() {
    return this.getBooleanAttribute('has_latest_calamari');
  }

  // health_status - computed: true, optional: false, required: false
  public get healthStatus() {
    return this.getStringAttribute('health_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // is_in_process - computed: true, optional: false, required: false
  public get isInProcess() {
    return this.getBooleanAttribute('is_in_process');
  }

  // machine_policy_id - computed: true, optional: false, required: false
  public get machinePolicyId() {
    return this.getStringAttribute('machine_policy_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // shell_name - computed: true, optional: false, required: false
  public get shellName() {
    return this.getStringAttribute('shell_name');
  }

  // shell_version - computed: true, optional: false, required: false
  public get shellVersion() {
    return this.getStringAttribute('shell_version');
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_summary - computed: true, optional: false, required: false
  public get statusSummary() {
    return this.getStringAttribute('status_summary');
  }

  // tenant_tags - computed: true, optional: false, required: false
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }

  // tenanted_deployment_participation - computed: true, optional: false, required: false
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return this.getListAttribute('tenants');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOctopusdeployDeploymentTargetsDeploymentTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployDeploymentTargetsDeploymentTargetsOutputReference {
    return new DataOctopusdeployDeploymentTargetsDeploymentTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets octopusdeploy_deployment_targets}
*/
export class DataOctopusdeployDeploymentTargets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_deployment_targets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployDeploymentTargets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployDeploymentTargets to import
  * @param importFromId The id of the existing DataOctopusdeployDeploymentTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployDeploymentTargets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_deployment_targets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_targets octopusdeploy_deployment_targets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployDeploymentTargetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployDeploymentTargetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_deployment_targets',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communicationStyles = config.communicationStyles;
    this._deploymentId = config.deploymentId;
    this._environments = config.environments;
    this._healthStatuses = config.healthStatuses;
    this._id = config.id;
    this._ids = config.ids;
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._partialName = config.partialName;
    this._roles = config.roles;
    this._shellNames = config.shellNames;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
    this._tenantTags = config.tenantTags;
    this._tenants = config.tenants;
    this._thumbprint = config.thumbprint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communication_styles - computed: false, optional: true, required: false
  private _communicationStyles?: string[]; 
  public get communicationStyles() {
    return this.getListAttribute('communication_styles');
  }
  public set communicationStyles(value: string[]) {
    this._communicationStyles = value;
  }
  public resetCommunicationStyles() {
    this._communicationStyles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationStylesInput() {
    return this._communicationStyles;
  }

  // deployment_id - computed: false, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // deployment_targets - computed: true, optional: false, required: false
  private _deploymentTargets = new DataOctopusdeployDeploymentTargetsDeploymentTargetsList(this, "deployment_targets", false);
  public get deploymentTargets() {
    return this._deploymentTargets;
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // health_statuses - computed: false, optional: true, required: false
  private _healthStatuses?: string[]; 
  public get healthStatuses() {
    return this.getListAttribute('health_statuses');
  }
  public set healthStatuses(value: string[]) {
    this._healthStatuses = value;
  }
  public resetHealthStatuses() {
    this._healthStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthStatusesInput() {
    return this._healthStatuses;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // is_disabled - computed: false, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // name - computed: false, optional: true, required: false
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

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // shell_names - computed: false, optional: true, required: false
  private _shellNames?: string[]; 
  public get shellNames() {
    return this.getListAttribute('shell_names');
  }
  public set shellNames(value: string[]) {
    this._shellNames = value;
  }
  public resetShellNames() {
    this._shellNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellNamesInput() {
    return this._shellNames;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // tenant_tags - computed: false, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communication_styles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._communicationStyles),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      health_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthStatuses),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      name: cdktf.stringToTerraform(this._name),
      partial_name: cdktf.stringToTerraform(this._partialName),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      shell_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shellNames),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communication_styles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._communicationStyles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      health_statuses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthStatuses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shell_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shellNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      thumbprint: {
        value: cdktf.stringToHclTerraform(this._thumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
