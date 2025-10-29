// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ses_configuration_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ses_configuration_set#id SesConfigurationSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ses_configuration_set#name SesConfigurationSet#name}
  */
  readonly name: string;
  /**
  * delivery_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}
  */
  readonly deliveryOptions?: SesConfigurationSetDeliveryOptions;
}
export interface SesConfigurationSetDeliveryOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}
  */
  readonly tlsPolicy?: string;
}

export function sesConfigurationSetDeliveryOptionsToTerraform(struct?: SesConfigurationSetDeliveryOptionsOutputReference | SesConfigurationSetDeliveryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_policy: cdktf.stringToTerraform(struct!.tlsPolicy),
  }
}


export function sesConfigurationSetDeliveryOptionsToHclTerraform(struct?: SesConfigurationSetDeliveryOptionsOutputReference | SesConfigurationSetDeliveryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_policy: {
      value: cdktf.stringToHclTerraform(struct!.tlsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetDeliveryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesConfigurationSetDeliveryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPolicy = this._tlsPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetDeliveryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsPolicy = value.tlsPolicy;
    }
  }

  // tls_policy - computed: false, optional: true, required: false
  private _tlsPolicy?: string; 
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string) {
    this._tlsPolicy = value;
  }
  public resetTlsPolicy() {
    this._tlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyInput() {
    return this._tlsPolicy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ses_configuration_set aws_ses_configuration_set}
*/
export class SesConfigurationSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ses_configuration_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SesConfigurationSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesConfigurationSet to import
  * @param importFromId The id of the existing SesConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ses_configuration_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesConfigurationSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ses_configuration_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ses_configuration_set aws_ses_configuration_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesConfigurationSetConfig
  */
  public constructor(scope: Construct, id: string, config: SesConfigurationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_configuration_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
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
    this._name = config.name;
    this._deliveryOptions.internalValue = config.deliveryOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // delivery_options - computed: false, optional: true, required: false
  private _deliveryOptions = new SesConfigurationSetDeliveryOptionsOutputReference(this, "delivery_options");
  public get deliveryOptions() {
    return this._deliveryOptions;
  }
  public putDeliveryOptions(value: SesConfigurationSetDeliveryOptions) {
    this._deliveryOptions.internalValue = value;
  }
  public resetDeliveryOptions() {
    this._deliveryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOptionsInput() {
    return this._deliveryOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      delivery_options: sesConfigurationSetDeliveryOptionsToTerraform(this._deliveryOptions.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_options: {
        value: sesConfigurationSetDeliveryOptionsToHclTerraform(this._deliveryOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesConfigurationSetDeliveryOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
