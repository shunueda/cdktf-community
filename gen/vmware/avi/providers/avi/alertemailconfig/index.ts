// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertemailconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#cc_emails Alertemailconfig#cc_emails}
  */
  readonly ccEmails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#description Alertemailconfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#id Alertemailconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#name Alertemailconfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#tenant_ref Alertemailconfig#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#to_emails Alertemailconfig#to_emails}
  */
  readonly toEmails: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#uuid Alertemailconfig#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#configpb_attributes Alertemailconfig#configpb_attributes}
  */
  readonly configpbAttributes?: AlertemailconfigConfigpbAttributes[] | cdktf.IResolvable;
}
export interface AlertemailconfigConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#version Alertemailconfig#version}
  */
  readonly version?: string;
}

export function alertemailconfigConfigpbAttributesToTerraform(struct?: AlertemailconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function alertemailconfigConfigpbAttributesToHclTerraform(struct?: AlertemailconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertemailconfigConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertemailconfigConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertemailconfigConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class AlertemailconfigConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertemailconfigConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlertemailconfigConfigpbAttributesOutputReference {
    return new AlertemailconfigConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig avi_alertemailconfig}
*/
export class Alertemailconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_alertemailconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alertemailconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alertemailconfig to import
  * @param importFromId The id of the existing Alertemailconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alertemailconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_alertemailconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/alertemailconfig avi_alertemailconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertemailconfigConfig
  */
  public constructor(scope: Construct, id: string, config: AlertemailconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_alertemailconfig',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccEmails = config.ccEmails;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._toEmails = config.toEmails;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cc_emails - computed: true, optional: true, required: false
  private _ccEmails?: string; 
  public get ccEmails() {
    return this.getStringAttribute('cc_emails');
  }
  public set ccEmails(value: string) {
    this._ccEmails = value;
  }
  public resetCcEmails() {
    this._ccEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccEmailsInput() {
    return this._ccEmails;
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // to_emails - computed: false, optional: false, required: true
  private _toEmails?: string; 
  public get toEmails() {
    return this.getStringAttribute('to_emails');
  }
  public set toEmails(value: string) {
    this._toEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toEmailsInput() {
    return this._toEmails;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new AlertemailconfigConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AlertemailconfigConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cc_emails: cdktf.stringToTerraform(this._ccEmails),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      to_emails: cdktf.stringToTerraform(this._toEmails),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(alertemailconfigConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cc_emails: {
        value: cdktf.stringToHclTerraform(this._ccEmails),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_emails: {
        value: cdktf.stringToHclTerraform(this._toEmails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(alertemailconfigConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertemailconfigConfigpbAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
