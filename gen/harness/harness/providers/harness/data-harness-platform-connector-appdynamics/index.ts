// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformConnectorAppdynamicsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics#id DataHarnessPlatformConnectorAppdynamics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics#identifier DataHarnessPlatformConnectorAppdynamics#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics#name DataHarnessPlatformConnectorAppdynamics#name}
  */
  readonly name?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics#org_id DataHarnessPlatformConnectorAppdynamics#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics#project_id DataHarnessPlatformConnectorAppdynamics#project_id}
  */
  readonly projectId?: string;
}
export interface DataHarnessPlatformConnectorAppdynamicsApiToken {
}

export function dataHarnessPlatformConnectorAppdynamicsApiTokenToTerraform(struct?: DataHarnessPlatformConnectorAppdynamicsApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAppdynamicsApiTokenToHclTerraform(struct?: DataHarnessPlatformConnectorAppdynamicsApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAppdynamicsApiTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAppdynamicsApiToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAppdynamicsApiToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_ref - computed: true, optional: false, required: false
  public get clientSecretRef() {
    return this.getStringAttribute('client_secret_ref');
  }
}

export class DataHarnessPlatformConnectorAppdynamicsApiTokenList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAppdynamicsApiTokenOutputReference {
    return new DataHarnessPlatformConnectorAppdynamicsApiTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAppdynamicsUsernamePassword {
}

export function dataHarnessPlatformConnectorAppdynamicsUsernamePasswordToTerraform(struct?: DataHarnessPlatformConnectorAppdynamicsUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAppdynamicsUsernamePasswordToHclTerraform(struct?: DataHarnessPlatformConnectorAppdynamicsUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAppdynamicsUsernamePasswordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAppdynamicsUsernamePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAppdynamicsUsernamePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password_ref - computed: true, optional: false, required: false
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataHarnessPlatformConnectorAppdynamicsUsernamePasswordList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAppdynamicsUsernamePasswordOutputReference {
    return new DataHarnessPlatformConnectorAppdynamicsUsernamePasswordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics harness_platform_connector_appdynamics}
*/
export class DataHarnessPlatformConnectorAppdynamics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_appdynamics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformConnectorAppdynamics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformConnectorAppdynamics to import
  * @param importFromId The id of the existing DataHarnessPlatformConnectorAppdynamics that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformConnectorAppdynamics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_appdynamics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_appdynamics harness_platform_connector_appdynamics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformConnectorAppdynamicsConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformConnectorAppdynamicsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_appdynamics',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // api_token - computed: true, optional: false, required: false
  private _apiToken = new DataHarnessPlatformConnectorAppdynamicsApiTokenList(this, "api_token", false);
  public get apiToken() {
    return this._apiToken;
  }

  // delegate_selectors - computed: true, optional: false, required: false
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username_password - computed: true, optional: false, required: false
  private _usernamePassword = new DataHarnessPlatformConnectorAppdynamicsUsernamePasswordList(this, "username_password", false);
  public get usernamePassword() {
    return this._usernamePassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
