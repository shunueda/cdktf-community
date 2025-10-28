// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointAzurecrConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AzureContainerRegistry registry which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#azurecr_name ServiceendpointAzurecr#azurecr_name}
  */
  readonly azurecrName: string;
  /**
  * The service principal tenant id which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#azurecr_spn_tenantid ServiceendpointAzurecr#azurecr_spn_tenantid}
  */
  readonly azurecrSpnTenantid: string;
  /**
  * The Azure subscription Id which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#azurecr_subscription_id ServiceendpointAzurecr#azurecr_subscription_id}
  */
  readonly azurecrSubscriptionId: string;
  /**
  * The Azure subscription name which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#azurecr_subscription_name ServiceendpointAzurecr#azurecr_subscription_name}
  */
  readonly azurecrSubscriptionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#description ServiceendpointAzurecr#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#id ServiceendpointAzurecr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#project_id ServiceendpointAzurecr#project_id}
  */
  readonly projectId: string;
  /**
  * Scope Resource Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#resource_group ServiceendpointAzurecr#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The AzureCR Service Endpoint Authentication Scheme, this can be 'WorkloadIdentityFederation', 'ManagedServiceIdentity' or 'ServicePrincipal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#service_endpoint_authentication_scheme ServiceendpointAzurecr#service_endpoint_authentication_scheme}
  */
  readonly serviceEndpointAuthenticationScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#service_endpoint_name ServiceendpointAzurecr#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#credentials ServiceendpointAzurecr#credentials}
  */
  readonly credentials?: ServiceendpointAzurecrCredentials;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#timeouts ServiceendpointAzurecr#timeouts}
  */
  readonly timeouts?: ServiceendpointAzurecrTimeouts;
}
export interface ServiceendpointAzurecrCredentials {
  /**
  * The service principal id which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#serviceprincipalid ServiceendpointAzurecr#serviceprincipalid}
  */
  readonly serviceprincipalid: string;
}

export function serviceendpointAzurecrCredentialsToTerraform(struct?: ServiceendpointAzurecrCredentialsOutputReference | ServiceendpointAzurecrCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serviceprincipalid: cdktf.stringToTerraform(struct!.serviceprincipalid),
  }
}


export function serviceendpointAzurecrCredentialsToHclTerraform(struct?: ServiceendpointAzurecrCredentialsOutputReference | ServiceendpointAzurecrCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serviceprincipalid: {
      value: cdktf.stringToHclTerraform(struct!.serviceprincipalid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointAzurecrCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointAzurecrCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceprincipalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceprincipalid = this._serviceprincipalid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointAzurecrCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceprincipalid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceprincipalid = value.serviceprincipalid;
    }
  }

  // serviceprincipalid - computed: false, optional: false, required: true
  private _serviceprincipalid?: string; 
  public get serviceprincipalid() {
    return this.getStringAttribute('serviceprincipalid');
  }
  public set serviceprincipalid(value: string) {
    this._serviceprincipalid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceprincipalidInput() {
    return this._serviceprincipalid;
  }
}
export interface ServiceendpointAzurecrTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#create ServiceendpointAzurecr#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#delete ServiceendpointAzurecr#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#read ServiceendpointAzurecr#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#update ServiceendpointAzurecr#update}
  */
  readonly update?: string;
}

export function serviceendpointAzurecrTimeoutsToTerraform(struct?: ServiceendpointAzurecrTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceendpointAzurecrTimeoutsToHclTerraform(struct?: ServiceendpointAzurecrTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointAzurecrTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointAzurecrTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointAzurecrTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr azuredevops_serviceendpoint_azurecr}
*/
export class ServiceendpointAzurecr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_azurecr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointAzurecr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointAzurecr to import
  * @param importFromId The id of the existing ServiceendpointAzurecr that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointAzurecr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_azurecr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurecr azuredevops_serviceendpoint_azurecr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointAzurecrConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointAzurecrConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_azurecr',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azurecrName = config.azurecrName;
    this._azurecrSpnTenantid = config.azurecrSpnTenantid;
    this._azurecrSubscriptionId = config.azurecrSubscriptionId;
    this._azurecrSubscriptionName = config.azurecrSubscriptionName;
    this._description = config.description;
    this._id = config.id;
    this._projectId = config.projectId;
    this._resourceGroup = config.resourceGroup;
    this._serviceEndpointAuthenticationScheme = config.serviceEndpointAuthenticationScheme;
    this._serviceEndpointName = config.serviceEndpointName;
    this._credentials.internalValue = config.credentials;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_object_id - computed: true, optional: false, required: false
  public get appObjectId() {
    return this.getStringAttribute('app_object_id');
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new cdktf.StringMap(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // az_spn_role_assignment_id - computed: true, optional: false, required: false
  public get azSpnRoleAssignmentId() {
    return this.getStringAttribute('az_spn_role_assignment_id');
  }

  // az_spn_role_permissions - computed: true, optional: false, required: false
  public get azSpnRolePermissions() {
    return this.getStringAttribute('az_spn_role_permissions');
  }

  // azurecr_name - computed: false, optional: false, required: true
  private _azurecrName?: string; 
  public get azurecrName() {
    return this.getStringAttribute('azurecr_name');
  }
  public set azurecrName(value: string) {
    this._azurecrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azurecrNameInput() {
    return this._azurecrName;
  }

  // azurecr_spn_tenantid - computed: false, optional: false, required: true
  private _azurecrSpnTenantid?: string; 
  public get azurecrSpnTenantid() {
    return this.getStringAttribute('azurecr_spn_tenantid');
  }
  public set azurecrSpnTenantid(value: string) {
    this._azurecrSpnTenantid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azurecrSpnTenantidInput() {
    return this._azurecrSpnTenantid;
  }

  // azurecr_subscription_id - computed: false, optional: false, required: true
  private _azurecrSubscriptionId?: string; 
  public get azurecrSubscriptionId() {
    return this.getStringAttribute('azurecr_subscription_id');
  }
  public set azurecrSubscriptionId(value: string) {
    this._azurecrSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azurecrSubscriptionIdInput() {
    return this._azurecrSubscriptionId;
  }

  // azurecr_subscription_name - computed: false, optional: false, required: true
  private _azurecrSubscriptionName?: string; 
  public get azurecrSubscriptionName() {
    return this.getStringAttribute('azurecr_subscription_name');
  }
  public set azurecrSubscriptionName(value: string) {
    this._azurecrSubscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azurecrSubscriptionNameInput() {
    return this._azurecrSubscriptionName;
  }

  // description - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // service_endpoint_authentication_scheme - computed: false, optional: true, required: false
  private _serviceEndpointAuthenticationScheme?: string; 
  public get serviceEndpointAuthenticationScheme() {
    return this.getStringAttribute('service_endpoint_authentication_scheme');
  }
  public set serviceEndpointAuthenticationScheme(value: string) {
    this._serviceEndpointAuthenticationScheme = value;
  }
  public resetServiceEndpointAuthenticationScheme() {
    this._serviceEndpointAuthenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointAuthenticationSchemeInput() {
    return this._serviceEndpointAuthenticationScheme;
  }

  // service_endpoint_name - computed: false, optional: false, required: true
  private _serviceEndpointName?: string; 
  public get serviceEndpointName() {
    return this.getStringAttribute('service_endpoint_name');
  }
  public set serviceEndpointName(value: string) {
    this._serviceEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointNameInput() {
    return this._serviceEndpointName;
  }

  // service_principal_id - computed: true, optional: false, required: false
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }

  // spn_object_id - computed: true, optional: false, required: false
  public get spnObjectId() {
    return this.getStringAttribute('spn_object_id');
  }

  // workload_identity_federation_issuer - computed: true, optional: false, required: false
  public get workloadIdentityFederationIssuer() {
    return this.getStringAttribute('workload_identity_federation_issuer');
  }

  // workload_identity_federation_subject - computed: true, optional: false, required: false
  public get workloadIdentityFederationSubject() {
    return this.getStringAttribute('workload_identity_federation_subject');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new ServiceendpointAzurecrCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ServiceendpointAzurecrCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointAzurecrTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointAzurecrTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azurecr_name: cdktf.stringToTerraform(this._azurecrName),
      azurecr_spn_tenantid: cdktf.stringToTerraform(this._azurecrSpnTenantid),
      azurecr_subscription_id: cdktf.stringToTerraform(this._azurecrSubscriptionId),
      azurecr_subscription_name: cdktf.stringToTerraform(this._azurecrSubscriptionName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      service_endpoint_authentication_scheme: cdktf.stringToTerraform(this._serviceEndpointAuthenticationScheme),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      credentials: serviceendpointAzurecrCredentialsToTerraform(this._credentials.internalValue),
      timeouts: serviceendpointAzurecrTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azurecr_name: {
        value: cdktf.stringToHclTerraform(this._azurecrName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurecr_spn_tenantid: {
        value: cdktf.stringToHclTerraform(this._azurecrSpnTenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurecr_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azurecrSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurecr_subscription_name: {
        value: cdktf.stringToHclTerraform(this._azurecrSubscriptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointAuthenticationScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: serviceendpointAzurecrCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointAzurecrCredentialsList",
      },
      timeouts: {
        value: serviceendpointAzurecrTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointAzurecrTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
